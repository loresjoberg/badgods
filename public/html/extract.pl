#!/usr/bin/perl

while (<>) {
	chomp;
	$allratings .= "$_ ";
}

while ($allratings =~ s# ([^.!?]+[.!?])\s*<(B|span class="ratinggrade")>([A-F][+-]?)</(B|span)></P>##i) {
	$lineout =  "$1 $3\n";
	$lineout =~ s/<[^>]+>//g;
	print $lineout;
}

while ($allratings =~ s#[.!?]\s+("[^"]+")\s+<(B|span class="ratinggrade")>([A-F][+-]?)</(B|span)></P>##i) {
	$lineout = "$1 $3\n";
	$lineout =~ s/<[^>]+>//g;
	print $lineout;
}

while ($allratings =~ s# ([^.!?]+\s+"[^"]+")\s+<(B|span class="ratinggrade")>([A-F][+-]?)</(B|span)></P>##i) {
	$lineout = "$1 $3\n";
	$lineout =~ s/<[^>]+>//g;
	print $lineout;
}
