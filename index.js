class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value, index) {
    if (index > this.size || index < 0) {
      console.log("index out of bound");
    }

    let i = 0;
    let current = this.head;
    let newNode = new Node(value, index);
    if (!this.head) {
      this.head = current;
    } else {
      while (i < index - 1) {
        current = current.next;
        i++;
      }

      newNode.next = current.next;
      current.next = newNode;
    }

    this.size += 1;
  }

  appendFirst(value) {
    this.head = new Node(value, this.head);
    this.size += 1;
  }

  appendLast(value) {
    let node = new Node(value);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size += 1;
  }

  delete(index) {
    let current = this.head;
    let i = 0;
    let previous;
    if (index > this.size || index < 0) {
      console.log("index out of bound");
    }

    if (index === 0) {
      this.head = current.next;
    } else {
      while (i < index) {
        i++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size -= 1;
  }

  deleteAll(values = []) {
    const arr = [...values];
    let current = this.head;
    let previous = null;

    while (current) {
      if (arr.indexOf(current.value) !== -1) {
        if (previous === null) {
          this.head = current.next;
          current = this.head;
        } else {
          previous.next = current.next;
          current = current.next;
        }
        this.size -= 1;
      } else {
        previous = current;
        current = current.next;
      }
    }
  }

  get(index) {
    if (index > this.size || index < 0) {
      console.log("index out of bound");
    }
    let current = this.head;
    let i = 0;
    while (i < index) {
      i++;
      current = current.next;
    }
    return current.value;
  }

  clone() {
    let newList = this.head;
    let cloneHead = this.head;
    console.log("Cloned list");
    while (cloneHead) {
      console.log(cloneHead.value);
      cloneHead = cloneHead.next;
    }
    return newList;
  }

  reverse() {
    let currentNode = this.head;
    this.head = null;
    while (currentNode) {
      if (!this.head) {
        this.head = new Node(currentNode.data);
      } else {
        let oldhead = this.head;
        this.head = new Node(currentNode.data);
        this.head.next = oldhead;
      }
      currentNode = currentNode.next;
    }
  }

  length() {
    return this.size;
  }

  print() {
    let current = this.head;
    console.log("List of values:");
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

ll = new LinkedList();

ll.appendFirst(1);
ll.appendFirst(2);
ll.appendFirst(3);
ll.appendFirst(4);
ll.appendFirst(5);

ll.reverse();

// let cloneHead = ll.clone();
// console.log("ll.get(2)---->", ll.get(2));
// ll.deleteAll([1, 3, 4]);
// ll.delete(2);
// ll.appendLast(4);
// ll.insert(100000, 1);
// console.log("length:", ll.length());
// console.log(ll);

ll.print();
