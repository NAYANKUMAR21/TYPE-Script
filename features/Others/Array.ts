const carMaker: (string | number)[] = ['ford', 'toyota', 'innova', 1];

const make: (string | number | boolean)[] = ['1', '2', 1, 2, true, false];

const dates: Date[] = [new Date(), new Date()];

const str = ['1', '2', 'flush', 'ford', 'toyota', 'innova'];

const twoD: (string | number)[][] = [
  ['1', '2', '3', 'nayn'],
  ['1', '2', '3', 'nayn'],
  ['1', '2', '3', 'nayn'],
];

//helps with inferencing with vales
const carType = carMaker[0];
const carM = carMaker.pop();

//help with map and forEach
str.map((item: string): string => {
  return item.toUpperCase();
});
