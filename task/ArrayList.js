class ArrayList {
  constructor() {
    this.items = [];
  }

  length() {
    return this.items.length;
  }

  append(element) {
    this.items.push(element);
  }

  insert(element, index) {
    if (index < 0 || index > this.items.length) {
      throw new Error("Index out of bounds");
    }
    this.items.splice(index, 0, element);
  }

  delete(index) {
    if (index < 0 || index >= this.items.length) {
      throw new Error("Index out of bounds");
    }
    return this.items.splice(index, 1)[0];
  }

  deleteAll(element) {
    this.items = this.items.filter((e) => e !== element);
  }

  get(index) {
    if (index < 0 || index >= this.items.length) {
      throw new Error("Index out of bounds");
    }
    return this.items[index];
  }

  clone() {
    const copy = new ArrayList();
    copy.items = [...this.items];
    return copy;
  }

  reverse() {
    this.items.reverse();
  }

  findFirst(element) {
    return this.items.indexOf(element);
  }

  findLast(element) {
    return this.items.lastIndexOf(element);
  }

  clear() {
    this.items = [];
  }

  extend(otherList) {
    for (let i = 0; i < otherList.length(); i++) {
      this.append(otherList.get(i));
    }
  }
}

export default ArrayList;
