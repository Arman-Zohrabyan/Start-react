<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$inp = file_get_contents('./db/data.json');
$tempArray = json_decode($inp);
array_push($tempArray, $_POST['data']);
$jsonData = json_encode($tempArray);
file_put_contents('./db/data.json', $jsonData);

echo json_encode(["SUCCESS"]);
