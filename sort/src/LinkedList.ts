import { Sorter } from './Sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }
  get length(): number {
    if (!this.head) {
      return 0;
    }

    let current = this.head;
    let count = 0;
    while (current != null) {
      current = current.next;
      count++;
    }

    return count;
  }
  at(x: number): Node | never {
    if (!this.head) {
      throw new Error('index out of bounds');
    }

    let count = 0;
    let current: Node | null = this.head;
    while (current !== null) {
      if (count == x) {
        return current;
      }
      count++;
      current = current.next;
    }
    throw new Error('Index out of bounds');
  }
  compare(Li: number, Ri: number): boolean | never {
    if (!this.head) {
      throw new Error('list is empty');
    }

    return this.at(Li).data > this.at(Ri).data;
  }
  swap(Li: number, Ri: number): void {
    const leftNiode = this.at(Li);
    const rightNode = this.at(Ri);

    const holdElement = leftNiode.data;
    leftNiode.data = rightNode.data;
    rightNode.data = holdElement;
  }
  print(): void {
    if (!this.head) {
      return;
    }
    let current = this.head;
    let sum = '';
    while (current.next) {
      sum += current.data + ' ';

      current = current.next;
    }
    console.log(sum);
    return;
  }
}
