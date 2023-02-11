"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const Utils_1 = require("./Utils");
class MatchReader extends CsvFileReader_1.CsvReader {
    mapRow(item) {
        return [
            (0, Utils_1.dateStringToDate)(item[0]),
            item[1],
            item[2],
            Number(item[3]),
            Number(item[4]),
            item[5],
            item[6],
        ];
    }
}
exports.MatchReader = MatchReader;
