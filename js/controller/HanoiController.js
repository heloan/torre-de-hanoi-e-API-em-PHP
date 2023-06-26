/// :: ***************************************************************
/// :: Programação Web - Lista 6 | Author: Heloan Marinho | 28/03/2023
/// :: Version 1.0 - 28/03/2023
/// :: ***************************************************************

import { Hanoi } from "../model/Hanoi.js";
import { HanoiView } from "../view/HanoiView.js";

export class HanoiController {

    /// :: Attribute.
    #_torreHanoi;
    #_hanoiView;
    #_gameButtons = document.querySelectorAll(".hanoi__btn");
    #_qntDiscosElement = document.querySelector("#qntDisco");
    #_qntMovimentosElement = document.querySelector("#qntMovimentos");
    #_limitsMovimentosElement = document.querySelector("#limitsMovimentos");
    #_btnElement = document.querySelector(".btn");

    constructor(){
        this.trigger();
    }

    trigger(){
        this.#_gameButtons.forEach(y => y.addEventListener('click', e => {
            this.movieTarget(e.target);
        }));
        this.#_btnElement.addEventListener('click', e => {
            let n = this.#_qntDiscosElement.value;
            if(n.length > 0){
                n = parseInt(n);
                this.#_torreHanoi = new Hanoi(n);
                this.#_hanoiView = new HanoiView('#torreA','#torreB','#torreC', n);
                this.#_qntMovimentosElement.value = this.#_torreHanoi.movimentos;
                this.#_limitsMovimentosElement.value = this.#_torreHanoi.movimentosLimit;
            }
        });
    }

    movieTarget(element){
        let diretion = element.getAttribute("data-disco").split("_");
        let result = this.#_torreHanoi.moverDiscos(parseInt(diretion[0]), parseInt(diretion[1]));
        this.#_hanoiView.update(parseInt(diretion[1]), parseInt(diretion[0]));
        this.#_qntMovimentosElement.value = this.#_torreHanoi.movimentos;
        if(result == "vitoria")
            alert("Você Venceu!");
        else if(result == "perdeu")
            alert("Você Perdeu!");
    }
}