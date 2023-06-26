/// :: ***************************************************************
/// :: Programação Web - Lista 6 | Author: Heloan Marinho | 28/03/2023
/// :: Version 1.0 - 28/03/2023
/// :: ***************************************************************

import { No } from "./No.js";

export class ListaLigadaSimples {

	_first;
    _last;
    _length;
    
    constructor(){
        this._length = 0;
    }

    length(){
        return this._length;
    }
    
    addFirst(element){
        let newNo = new No(element, this._first);
        this._first = newNo;
        
        if(this.length() == 0)
            this._last = newNo;
        
        this._length++;
    }
    
    add(element) {
        if(this.length() == 0)
            this.addFirst(element);
        else {
            let newNo = new No(element);
            this._last.setNext(newNo);
            this._last = newNo;
            this._length++;
        }
    }
    
    isEmpity(){
        return this._length == 0;
    }
    
    isIndexOk(index){
        return index < this.length() && index >= 0;
    }
    
    getNo(index){
        if(!this.isIndexOk(index))
            throw new Error("Posição não existe");
        else {
            let current = this._first;
            for(let i = 0; i < index; i++)
                current = current.getNext();
            return current;
        }
    }
    
    getNoElement(index) {
        return this.getNo(index).getElement();
    }
    
    removeFirst() {
        if(!this.isIndexOk(0))
            throw new Error("Posição não existe");
        else {
            this._first = this._first.getNext();
            this._length--;
            if(this.isEmpity())
                this._last = null;
        }
    }
    
    setNoElement(index, element) {
    	let no = getNo(index);
    	no.setElement(element);
    }

    toJavascriptArray(){
        if(this.length() == 0)
            return [];
        else {
            let array = [];
            let current = this._first;
            for(let i = 0; i < this.length(); i++){
                array.push(current.getElement());
                current = current.getNext();
            }
            return array;
        }
    }
}