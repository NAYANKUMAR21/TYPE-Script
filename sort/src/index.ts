import { charcCollections } from './CharcCollections';
import { LinkedList } from './LinkedList';
import { NumberCollection } from './NumCollections';

const collection = new NumberCollection([5, 8, -800, -2]);
const charsCollection = new charcCollections('zzzayan');
const List = new LinkedList();

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
