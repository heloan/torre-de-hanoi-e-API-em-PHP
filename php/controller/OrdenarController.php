<?php 
/// :: ***************************************************************
/// :: Programação Web - Lista 6 | Author: Heloan Marinho | 04/04/2023
/// :: Version 1.0 - 04/04/2023
/// :: ***************************************************************


header("Access-Control-Allow-Origin: *");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $numbers = array();
    foreach ($data as $value) {
        array_push($numbers, $value->number);
    }

    sort($numbers);

    for($i =0; $i<count($numbers); $i++){
        $table[$i] = $numbers[$i];
    }
   echo json_encode($table);  
}

?>