class Node {
  next = null;
  value = null;

  constructor(value) {
    this.value = value;
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
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (i === index) {
        return curr.value;
      }
      i += 1;
      curr = curr.next;
    }

    return -1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertHead(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  insertTail(val) {
    let newNode = new Node(val);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  /**
   * @param {number} index
   * @return {boolean}
   */
  remove(index) {
    if (!this.head || index < 0) return false;

    if (index === 0) {
      const oldHead = this.head;
      this.head = oldHead.next;
      if (!this.head) {
        this.tail = null;
      }

      return true;
    }

    let prev = this.head;
    let curr = this.head.next;
    let i = 1;

    while (curr) {
      if (i === index) {
        prev.next = curr.next;
        if (!curr.next) {
          this.tail = prev;
        }

        return true;
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
    let val = [];
    let curr = this.head;
    while (curr) {
      val.push(curr.value);
      curr = curr.next;
    }
    return val;
  }
}

// const list = new LinkedList();
// list.insertHead(1);
// list.insertTail(2);
// list.insertHead(0);
// list.insertHead(10);

// console.log(list);
// console.log(list.getValues());
