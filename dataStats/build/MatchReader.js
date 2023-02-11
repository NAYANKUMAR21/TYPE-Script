"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const Utils_1 = require("./Utils");
const CsvReader_1 = require("./CsvReader");
class MatchReader {
    static FromCsv(fileName) {
        return new MatchReader(new CsvReader_1.CsvReader(fileName));
    }
    constructor(reader) {
        this.reader = reader;
        this.matchData = [];
    }
    load() {
        this.reader.read();
        this.matchData = this.reader.data.map((item) => {
            return [
                (0, Utils_1.dateStringToDate)(item[0]),
                item[1],
                item[2],
                Number(item[3]),
                Number(item[4]),
                item[5],
                item[6],
            ];
        });
    }
}
exports.MatchReader = MatchReader;
