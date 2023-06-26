/// :: ***************************************************************
/// :: Programação Web - Lista 6 | Author: Heloan Marinho | 28/03/2023
/// :: Version 1.0 - 28/03/2023
/// :: ***************************************************************

import { Hanoi } from "../model/Hanoi.js";

export class HanoiView {
    
    /// :: Attribute.
    #_elemtA;
    #_elemtB;
    #_elemtC;
    #_qntDeDiscos;

    constructor(elemtA, elemtB, elemtC, qntDeDiscos){
        this.#_elemtA = document.querySelector(elemtA);
        this.#_elemtB = document.querySelector(elemtB);
        this.#_elemtC = document.querySelector(elemtC);
        this.#_qntDeDiscos = qntDeDiscos;
        this.create();
    }

    template(i){
        const element = document.createElement('span');
        element.classList.add('hanoi__disco');
        element.setAttribute('data-number', i);
        element.style.width = `${(i)*100/this.#_qntDeDiscos}%`;

        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        element.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
        return element;
    }

    create(){
        for(let i=this.#_qntDeDiscos; i>0; i--){
            this.#_elemtA.insertBefore(
                this.template(i), 
                this.#_elemtA.firstChild);
        }
    }

    update(destino, origem){
        let elementOrigem =  this.getTorreElement(origem);
        let elementDestino =  this.getTorreElement(destino);
        let origemChild = elementOrigem.firstChild;
        if(origemChild != null){
            let clone = origemChild.cloneNode(true);
            elementDestino.insertBefore(clone, elementDestino.firstChild);
            elementOrigem.removeChild(origemChild);
        }
    }

    getTorreElement(op){
        switch(op){
            case 1:
                return this.#_elemtA;
            case 2:
                return this.#_elemtB;
            case 3:
                return this.#_elemtC;
            default:
                return null;
        }
    }
}