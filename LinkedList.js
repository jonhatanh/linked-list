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
        let auxNode = this.#head;
        while(auxNode.nextNode !== null) {
            auxNode = auxNode.nextNode;
        }
        auxNode.nextNode = newNode;
        this.#size++;
    }

    prepend(value) {
        const newNode = new Node(value);
        if(this.#head === null) {
            this.#head = newNode;
            this.#size++;
            return;
        }
        newNode.nextNode = this.#head
        this.#head = newNode;
        this.#size++;
    }

    size() {return this.#size}
    head() {return this.#head}
    tail() {
        if(this.#size === 0) return null;
        let tailNode = this.#head;
        while(tailNode.nextNode !== null) {
            tailNode = tailNode.nextNode;
        }
        return tailNode;
    }

    at(index) {
        let cont = 0;
        let node = this.#head;
        while(node !== null && cont !== index) {
            node = node.nextNode;
            cont++;
        }
        return node;
    }

    pop() {
        if(this.#size === 0) return;
        if(this.#size === 1) {
            this.#head = null;
            this.#size--;
            return;
        }
        if(this.#size === 2) {
            this.#head.nextNode = null;
            this.#size--;
            return;
        }
        let lastButOne = this.#head;
        while(lastButOne.nextNode.nextNode !== null) {
            lastButOne = lastButOne.nextNode;
        }
        lastButOne.nextNode = null;
        this.#size--;
    }
    
    contains(value) {
        let auxNode = this.#head;
        while(auxNode !== null) {
            if(auxNode.value === value) {
                return true;
            }
            auxNode = auxNode.nextNode;
        }
        return false;
    }

    find(value) {
        let auxNode = this.#head;
        let index = 0;
        while(auxNode !== null) {
            if(auxNode.value === value) {
                return index;
            }
            auxNode = auxNode.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let string = "";
        let auxNode = this.#head;
        while(auxNode !== null) {
            string += `(${auxNode.value}) -> `
            auxNode = auxNode.nextNode;
        }
        string+= "null";
        return string;
    }

    insertAt(value, index) {
        if(index >= this.#size) {
            this.append(value);
            return;
        }
        if(index <= 0) {
            this.prepend(value);
            return;
        }

        let prevNode = this.#head
        let cont = 0;
        while((cont + 1) < index) {
            prevNode = prevNode.nextNode;
            cont++;
        }
        const newNode = new Node(value);
        newNode.nextNode = prevNode.nextNode;
        prevNode.nextNode = newNode;
        this.#size++;
    }

    removeAt(index) {
        if(index >= this.#size) {
            return false;
        }
        if(index < 0) {
            return false;
        }
        if(index == 0) {
            this.#head = this.#head.nextNode;
            this.#size--;
            return;
        }

        let prevNode = this.#head
        let cont = 0;
        while((cont + 1) < index) {
            prevNode = prevNode.nextNode;
            cont++;
        }
        prevNode.nextNode = prevNode.nextNode.nextNode;
        this.#size--;
        return true;
    }

    clear() {
        this.#head = null;
        this.#size = 0;
    }

}