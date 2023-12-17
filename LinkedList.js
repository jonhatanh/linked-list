import Node from './Node.js';

export default class LinkedList {

    #size = 0;
    #head = null;

    constructor() {}

    append(value) {
        const newNode = new Node(value);
        if(this.#head === null) {
            this.#head = newNode;
            this.#size++;
            return;
        }
        const auxNode = this.#head;
        while(auxNode.nextNode !== null) {
            auxNode = auxNode.nextNode;
        }
        auxNode.nextNode = newNode;
        this.#size++;
    }

    


}