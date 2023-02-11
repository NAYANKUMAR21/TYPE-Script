"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (date) => {
    const x = date.split('/').map((item) => {
        return Number(item);
    });
    return new Date(x[2], x[1] - 1, x[0]);
};
exports.dateStringToDate = dateStringToDate;
