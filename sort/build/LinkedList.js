"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    add(data) {
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
    get length() {
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
    at(x) {
        if (!this.head) {
            throw new Error('index out of bounds');
        }
        let count = 0;
        let current = this.head;
        while (current !== null) {
            if (count == x) {
                return current;
            }
            count++;
            current = current.next;
        }
        throw new Error('Index out of bounds');
    }
    compare(Li, Ri) {
        if (!this.head) {
            throw new Error('list is empty');
        }
        return this.at(Li).data > this.at(Ri).data;
    }
    swap(Li, Ri) {
        const leftNiode = this.at(Li);
        const rightNode = this.at(Ri);
        const holdElement = leftNiode.data;
        leftNiode.data = rightNode.data;
        rightNode.data = holdElement;
    }
    print() {
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
exports.LinkedList = LinkedList;
