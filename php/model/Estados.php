<?php
/// :: ***************************************************************
/// :: Programação Web - Lista 6 | Author: Heloan Marinho | 04/04/2023
/// :: Version 1.0 - 04/04/2023
/// :: ***************************************************************

class Estados {
    public function listarEstados() {
      $estados = array(
        array('sigla' => 'AC', 'estado' => 'Acre'),
        array('sigla' => 'AL', 'estado' => 'Alagoas'),
        array('sigla' => 'AP', 'estado' => 'Amapá'),
        array('sigla' => 'AM', 'estado' => 'Amazonas'),
        array('sigla' => 'BA', 'estado' => 'Bahia'),
        array('sigla' => 'CE', 'estado' => 'Ceará'),
        array('sigla' => 'DF', 'estado' => 'Distrito Federal'),
        array('sigla' => 'ES', 'estado' => 'Espírito Santo'),
        array('sigla' => 'GO', 'estado' => 'Goiás'),
        array('sigla' => 'MA', 'estado' => 'Maranhão'),
        array('sigla' => 'MT', 'estado' => 'Mato Grosso'),
        array('sigla' => 'MS', 'estado' => 'Mato Grosso do Sul'),
        array('sigla' => 'MG', 'estado' => 'Minas Gerais'),
        array('sigla' => 'PA', 'estado' => 'Pará'),
        array('sigla' => 'PB', 'estado' => 'Paraíba'),
        array('sigla' => 'PR', 'estado' => 'Paraná'),
        array('sigla' => 'PE', 'estado' => 'Pernambuco'),
        array('sigla' => 'PI', 'estado' => 'Piauí'),
        array('sigla' => 'RJ', 'estado' => 'Rio de Janeiro'),
        array('sigla' => 'RN', 'estado' => 'Rio Grande do Norte'),
        array('sigla' => 'RS', 'estado' => 'Rio Grande do Sul'),
        array('sigla' => 'RO', 'estado' => 'Rondônia'),
        array('sigla' => 'RR', 'estado' => 'Roraima'),
        array('sigla' => 'SC', 'estado' => 'Santa Catarina'),
        array('sigla' => 'SP', 'estado' => 'São Paulo'),
        array('sigla' => 'SE', 'estado' => 'Sergipe'),
        array('sigla' => 'TO', 'estado' => 'Tocantins')
      );
  
      return $estados;
    }
}
  
?>