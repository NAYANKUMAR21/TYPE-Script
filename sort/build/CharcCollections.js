"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.charcCollections = void 0;
const Sorter_1 = require("./Sorter");
class charcCollections extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(Li, Ri) {
        return (this.data[Li].toLocaleLowerCase() > this.data[Ri].toLocaleLowerCase()
        //< descending >ascending
        );
    }
    swap(Li, Ri) {
        let chars = this.data.split('');
        const he = chars[Li];
        chars[Li] = chars[Ri];
        chars[Ri] = he;
        this.data = chars.join('');
    }
    print() {
        console.log(this.data);
    }
}
exports.charcCollections = charcCollections;
