/// :: ***************************************************************
/// :: Programação Web - Lista 6 | Author: Heloan Marinho | 03/04/2023
/// :: Version 1.0 - 03/04/2023
/// :: ***************************************************************

import { ListaLigadaDupla } from "./ListaLigadaDupla.js";

export class Pilha {
    #_list;
	
	constructor(){
		this.#_list = new ListaLigadaDupla();
	}
	
	isEmpity() {
		return this.#_list.length() == 0;
	}
	
	push(element) {
		this.#_list.add(element);
	}
	
	pop(){
		if(!this.#_list.isEmpity()) {
			let item = this.#_list.getNoElement(this.#_list.length()-1);
			this.#_list.removeLast();
			return item;
		}
		return null;
	}
}