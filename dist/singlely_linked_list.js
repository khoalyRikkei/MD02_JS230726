"use strict";
class SLLNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        return this;
    }
    pop() {
        var current = this.head;
        return current;
    }
    shift() {
        var currentHead = this.head;
        return currentHead;
    }
    unshift(val) {
        var newNode = new SLLNode(val);
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        var current = this.head;
        return current;
    }
    set(index, val) {
        var foundNode = this.get(index);
        return false;
    }
    insert(index, val) {
        return true;
    }
    remove(index) {
    }
    reverse() {
        return this;
    }
    print() {
        var arr = [];
        console.log(arr);
    }
}
