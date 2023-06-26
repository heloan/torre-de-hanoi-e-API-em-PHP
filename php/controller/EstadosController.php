<?php
/// :: ***************************************************************
/// :: Programação Web - Lista 6 | Author: Heloan Marinho | 04/04/2023
/// :: Version 1.0 - 04/04/2023
/// :: ***************************************************************

require_once "../model/Estados.php";

$estados = new Estados();
echo json_encode($estados->listarEstados());
?>