class Node {    
    constructor(value){
        this.prev = null;
        this.next = null;
        this.value = value
    }
}

class MyDeque {
    constructor() {
        this.head = new Node(-1);
        this.tail = new Node(-1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        if(this.head.next === this.tail) return true;

        return false;
    }

    /**
     * @param {number} value
     */
    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail.prev;
        newNode.next = this.tail;
        this.tail.prev.next = newNode;
        this.tail.prev = newNode;
    }

    /**
     * @param {number} value
     * @return {void}
     */
    appendleft(value) {
        const newNode =  new Node(value);
        const firstNode = this.head.next;
        newNode.next  = firstNode;
        newNode.prev = this.head;
        firstNode.prev = newNode;
        this.head.next = newNode;
    }

    /**
     * @return {void}
     */
    pop() {
        if(this.isEmpty()) return -1;

        const targetNode = this.tail.prev;
        const value = targetNode.value;
        this.tail.prev = targetNode.prev;
        targetNode.prev.next = this.tail;
        return value;
    }

    /**
     * @return {number}
     */
    popleft() {
        if(this.isEmpty()) return -1;

        const targetNode = this.head.next;
        const nextNode = targetNode.next;
        const value = targetNode.value;
        this.head.next = nextNode;
        nextNode.prev = this.head;

        return value;

    }
}
