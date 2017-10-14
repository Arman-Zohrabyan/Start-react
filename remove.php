<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

rsort($_POST['arrayKeys']);

$data = file_get_contents('./db/data.json');
$data = json_decode($data);

foreach ($_POST['arrayKeys'] as $v) {
	array_splice($data, $v, 1);	
}

$data = json_encode($data);
file_put_contents('./db/data.json', $data);

echo $data;
