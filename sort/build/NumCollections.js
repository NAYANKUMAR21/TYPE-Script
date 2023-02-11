"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumberCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    compare(Li, Ri) {
        return this.data[Li] > this.data[Ri];
    }
    swap(Li, Ri) {
        let he = this.data[Li];
        this.data[Li] = this.data[Ri];
        this.data[Ri] = he;
    }
    get length() {
        return this.data.length;
    }
    print() {
        console.log(this.data);
    }
}
exports.NumberCollection = NumberCollection;
const collection = new NumberCollection([1, 2, 3, 4]);
collection.length;
//with get mdificater we can write length as it
//is without calling method
