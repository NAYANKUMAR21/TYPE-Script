"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharcCollections_1 = require("./CharcCollections");
const LinkedList_1 = require("./LinkedList");
const NumCollections_1 = require("./NumCollections");
const collection = new NumCollections_1.NumberCollection([5, 8, -800, -2]);
const charsCollection = new CharcCollections_1.charcCollections('zzzayan');
const List = new LinkedList_1.LinkedList();
List.add(-1);
List.add(21);
List.add(28);
List.add(27);
List.add(26);
List.add(25);
List.add(-3);
// const sorter = new Sorter(collection);
// const sorter2 = new Sorter(charsCollection);
// const sorter3 = new Sorter(List);
// sorter.sort();
// sorter2.sort();
// sorter3.sort();
collection.print();
charsCollection.print();
List.print();
collection.sort();
charsCollection.sort();
List.sort();
console.log('-------------------------------------------');
collection.print();
charsCollection.print();
List.print();
