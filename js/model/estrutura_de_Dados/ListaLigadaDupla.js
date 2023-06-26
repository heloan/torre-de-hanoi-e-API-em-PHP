/// :: ***************************************************************
/// :: Programação Web - Lista 6 | Author: Heloan Marinho | 28/03/2023
/// :: Version 1.0 - 28/03/2023
/// :: ***************************************************************

import { No } from "./No.js";
import { ListaLigadaSimples } from "./ListaLigadaSimples.js";

export class ListaLigadaDupla extends ListaLigadaSimples {

    addFirst(element){
		if(this.isEmpity()) {
			let no = new No(element);
			this._first = no;
			this._last = no;
		}
		else {
	        let no = new No(this._first, element);
	        this._first.setPrev(no);
	        this._first = no;
		}
		this._length++;
    }
	
	add(element, index) {
        if(this.isEmpity())
            this.addFirst(element);
        else if(index == undefined || index == this.length() - 1){
            let no = new No(element);
            no.setPrev(this._last);
            this._last.setNext(no);         
            this._last = no;
            this._length++;
        }
        else {
            let prev = this.pegaNo(index-1);
            let no = new No(element, prev.getNext());
            prev.setNext(no);
            this._length++;
        }
    }
	
	
	removeLast() {
		if(!this.isIndexOk(this.length()-1))
			throw new Error("Posição não existe");
		else if(this.length() == 1)
			this.removeFirst();
		else {
			let penultima = this._last.getPrev();
			this._last = penultima;
			this._length--;
		}
	}
	
	remove(index) {
		if(!this.isIndexOk(this.length()-1))
			throw new Error("Posição não existe");
		else if(index == 0)
			this.removeFirst();
		else if(index == this.length()-1)
			this.removeDoFim();
		else {
			let prev = this.getNo(index-1);
			let atual = prev.getNext();
			let next = atual.getNext();
			prev.setNext(next);
			next.setPrev(prev);
			this._length--;
		}
	}
}