class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  length() {
    return this.size;
  }

  append(element) {
    const node = new Node(element);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  insert(element, index) {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bounds");
    }
    const node = new Node(element);

    if (index === this.size) {
      this.append(element);
      return;
    }
    if (index === 0) {
      node.next = this.head;
      if (this.head) this.head.prev = node;
      this.head = node;
      if (!this.tail) this.tail = node;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      const prev = current.prev;
      node.next = current;
      node.prev = prev;
      if (prev) prev.next = node;
      current.prev = node;
    }
    this.size++;
  }

  delete(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    const value = current.value;

    if (current.prev) current.prev.next = current.next;
    else this.head = current.next;

    if (current.next) current.next.prev = current.prev;
    else this.tail = current.prev;

    this.size--;
    return value;
  }

  deleteAll(element) {
    let current = this.head;
    while (current) {
      if (current.value === element) {
        const next = current.next;

        if (current.prev) current.prev.next = current.next;
        else this.head = current.next;

        if (current.next) current.next.prev = current.prev;
        else this.tail = current.prev;

        this.size--;
        current = next;
      } else {
        current = current.next;
      }
    }
  }

  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  clone() {
    const newList = new DoublyLinkedList();
    let current = this.head;
    while (current) {
      newList.append(current.value);
      current = current.next;
    }
    return newList;
  }

  reverse() {
    let current = this.head;
    let temp = null;
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    [this.head, this.tail] = [this.tail, this.head];
  }

  findFirst(element) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === element) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  findLast(element) {
    let current = this.tail;
    let index = this.size - 1;
    while (current) {
      if (current.value === element) return index;
      current = current.prev;
      index--;
    }
    return -1;
  }

  clear() {
    this.head = this.tail = null;
    this.size = 0;
  }

  extend(otherList) {
    for (let i = 0; i < otherList.length(); i++) {
      this.append(otherList.get(i));
    }
  }

  print() {
    let current = this.head;
    const arr = [];
    console.log("List of values:");
    while (current) {
      console.log(current.value);
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

export default DoublyLinkedList;
