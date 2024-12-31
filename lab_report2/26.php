<?php
function tenMostFrequentWords($input) {
    $cleanedInput = strtolower(preg_replace('/[^\w\s]/', '', $input));

    $words = explode(' ', $cleanedInput);

    $wordCounts = array_count_values($words);

    arsort($wordCounts);

    $mostFrequentWords = array_slice($wordCounts, 0, 10, true);

    foreach ($mostFrequentWords as $word => $count) {
        if ($word !== "") { 
            echo $word . ": " . $count . "\n";
        }
    }
}

echo "Enter a string: ";
$input = trim(fgets(STDIN));

tenMostFrequentWords($input);
?>
