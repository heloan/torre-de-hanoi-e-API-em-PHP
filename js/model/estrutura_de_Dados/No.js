/// :: ***************************************************************
/// :: Programação Web - Lista 6 | Author: Heloan Marinho | 28/03/2023
/// :: Version 1.0 - 28/03/2023
/// :: ***************************************************************

export class No {

    #_next;
    #_prev;
    #_element;

    constructor(element, next) {
        this.#_element = element;
        this.#_next = next == undefined ? null : next;
    }

    setElement(element){
        this.#_element = element;
    }

    setPrev(prev){
        this.#_prev = prev;
    }
    
    getPrev(){
        return this.#_prev;
    }
    
    setNext(next){
        this.#_next = next;
    }
    
    getNext(){
        return this.#_next;
    }
    
    getElement(){
        return this.#_element;
    }
}