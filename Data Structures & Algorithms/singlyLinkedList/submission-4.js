class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if(!this.head || index < 0) return -1;

        let curr = this.head;
        let i = 0;
        while(curr){
            if(i === index) {
                return curr.value;
            }
            i +=1;
            curr = curr.next;
        }

        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = this.head;
            return;
        }

        node.next = this.head;
        this.head = node;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const node = new Node(val);

        if(!this.tail){
            this.head = node;
            this.tail = this.head;
            return;
        }

        this.tail.next = node;
        this.tail = node
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if(!this.head || index < 0) return false;

        if(index === 0){
            this.head = this.head.next;
            if(!this.head){
                this.tail = null;
            }
            return true;
        }

        let prev = this.head;
        let curr = this.head.next;
        let i = 1;
        while(curr) {
            if(i === index){
                prev.next = curr.next;
                if(!curr.next){
                    this.tail = prev;
                }
                return true
            }
            prev = curr;
            curr = curr.next;
            i += 1;
        }

        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const res = [];
        let curr = this.head;
        while(curr){
            res.push(curr.value);
            curr = curr.next;
        }

        return res;
    }
}
