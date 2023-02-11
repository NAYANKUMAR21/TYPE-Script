"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
//we can also observe we are not using interface
//abstrach means some methods such as length
//add and compare will eventually exist
//abstract Classes =  is collections of asbstract methods or concraete methods or both
//interface = is collections of just abstract methods
class Sorter {
    sort() {
        let { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
