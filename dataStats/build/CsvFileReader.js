"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvReader = void 0;
const fs_1 = __importDefault(require("fs"));
//above tuple could also been written as (Date|string| string| number| number| matchResult| string)[]
//TypeData is generic Type works for resuable cmponents or classes as arguments
class CsvReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.fileName, { encoding: 'utf-8' })
            .split('\n')
            .map((item) => {
            let x = item.split(',');
            Number(x[3]);
            Number(x[4]);
            return x;
        })
            .map(this.mapRow);
    }
}
exports.CsvReader = CsvReader;
