<?php

$dir = new DirectoryIterator(__DIR__ . '/public/images/speak-with-monsters');
$count = 1;

$present = [
"rotgrubs",
"chimera",
"sahuagin",
"succubus",
"rustmonster",
"orc",
"unicorn",
"mindflayer",
"doppelganger",
"vampire",
"shamblingmound",
"skeleton",
"herdanimal",
"owlbear",
"mimic",
"harpy",
"pseudodragon",
"kobold",
"troll",
"minotaur",
"willowisp",
"mummy",
"medusa",
"ettin",
"invisiblestalker",
"ceratosaurus",
"bulette",
"demogorgon",
"giantant",
"rakshasa",
"xorn",
"umberhulk",
"irongolem",
"dryad",
"berserker",
"anhkeg"
];

$lines = [];
foreach ($dir as $fileinfo) {
    if (!$fileinfo->isDot()) {
        $mtime = $fileinfo->getMTime();
        $date = date('Y-m-d', $mtime);
        $pathName = $fileinfo->getPathname();
        $fileName = $fileinfo->getFileName();
        [$slug, $ext] = explode('.', $fileName);
        if (in_array($slug, $present)) {
            continue;
        }
        $moniker = ucfirst($slug);
        $lines[] = <<<SQL
INSERT INTO posts ( `section_id`, `slug`, `moniker`, `post_date`, `live`, `notes`, `searchtext`, `media_type`, `annotation`)
values 	(4,'$slug','$moniker','$date',1,'','dnd, monster, $slug','image','');
SQL;
    }
}

print implode("\n", $lines) . PHP_EOL;
