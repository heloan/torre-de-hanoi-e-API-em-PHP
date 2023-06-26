/// :: ***************************************************************
/// :: Programação Web - Lista 6 | Author: Heloan Marinho | 28/03/2023
/// :: Version 1.0 - 28/03/2023
/// :: ***************************************************************

import { Pilha } from "./estrutura_de_Dados/Pilha.js";

export class Hanoi {

    /// :: Attributes.
    #_torreA = new Pilha();
    #_torreB = new Pilha();
    #_torreC = new Pilha();
    numeroDiscos = 0;
    movimentos = 0;
    movimentosLimit = 0;

    /// :: Constructor.
    constructor(qntDeDiscos){
        this.numeroDiscos = qntDeDiscos;
        this.movimentosLimit = 2 * qntDeDiscos - 1;
        for(let i = 0; i < qntDeDiscos; i++){
            this.#_torreA.push(i);
        }
    }

    /// :: Methodos.
    moverDiscos(origem, destino) {
        if (this.numeroDiscos > 0 && origem != destino) {
            let torreOrigem = this.getTorre(origem);
            let torreDestino = this.getTorre(destino);

            if(!torreOrigem.isEmpity())
                torreDestino.push(torreOrigem.pop());
            this.movimentos++;

            if(this.#_torreA.isEmpity() && this.#_torreB.isEmpity())
                return "vitoria";
            else if(this.movimentos == this.movimentosLimit)
                return "perdeu";
            else
                return "continue";
        }
    }

    getTorre(op){
        switch(op){
            case 1:
                return this.#_torreA;
            case 2:
                return this.#_torreB;
            case 3:
                return this.#_torreC;
            default:
                return null;
        }
    }
}