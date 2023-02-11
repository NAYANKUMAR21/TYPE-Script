"use strict";
class MyClass {
    constructor(data) {
        this.data = data;
    }
    add(a) {
        return a;
    }
}
let x = new MyClass({ name: 'string', age: 24, voted: true });
let y = new MyClass(25);
let z = new MyClass('Nayan');
