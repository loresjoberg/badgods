<?php

$dir = new DirectoryIterator(__DIR__ . '/build/html');
$count = 1;

$lines = [];
/**
 * @param string $pathName
 * @param $matches
 * @return array
 */
function getVars(string $pathName): array
{
    $text = file_get_contents($pathName);
    $vars = [];
    preg_match_all('/#set\s+var="([^"]+)"\s+value="([^"]+)"/', $text, $matches, PREG_SET_ORDER
    );
    foreach ($matches as $match) {
        $vars[$match[1]] = $match[2];
    }
    return $vars;
}

foreach ($dir as $fileinfo) {
    if (!$fileinfo->isDot() && !$fileinfo->isDir()) {

        $mtime = $fileinfo->getMTime();
        $fileName = $fileinfo->getFileName();
        $pathName = $fileinfo->getPathname();


        $vars = getVars($pathName);

        $title = $vars['title'] ?? '';
        $title = str_replace("'", "\'", $title);
        $date = $vars['debut'] ?? date('Ymd', $mtime);
        $date = preg_replace('/(\d\d\d\d)(\d\d)(\d\d)/', "$1-$2-$3", $date);
        $keywords = $vars['keywords'] ?? '';
        $annotation = '';
        $notes = '';
        $mediaType = 'html';
        $live = 1;


        [$slug, $ext] = explode('.', $fileName);
        $lines[] = <<<SQL
INSERT INTO posts ( `section_id`, `slug`, `moniker`, `post_date`, `live`, `notes`, `searchtext`, `media_type`, `annotation`)
values 	(7, '$slug', '$title', '$date', $live, '$notes', '$keywords', '$mediaType','$annotation');
SQL;
    }
}

print implode("\n", $lines) . PHP_EOL;
