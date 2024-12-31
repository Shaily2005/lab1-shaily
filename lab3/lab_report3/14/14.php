<?php

$countries = [
    'usa' => ['New York', 'Los Angeles', 'Chicago'],
    'india' => ['Delhi', 'Mumbai', 'Bangalore'],
    'canada' => ['Toronto', 'Vancouver', 'Montreal']
];


if (isset($_GET['country']) && array_key_exists($_GET['country'], $countries)) {
    $country = $_GET['country'];


    echo json_encode($countries[$country]);
} else {

    echo json_encode([]);
}
