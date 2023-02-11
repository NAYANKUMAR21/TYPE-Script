const apple: number = 5;
const Name: string = 'nayan';
const puese: boolean = true;
const push: string = 'push';
const nothing: null = null;
const nothingAtall: undefined = undefined;

//buitl in date
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'blue', 'yello', 's'];

let nums: number[] = [1, 2, 3, 4, 5, 6];
let ArrayBoolesn: boolean[] = [true, false, false, true];

//classes
class Car {}

let car: Car = new Car();

//Object literal

interface ObjectType {
  x: number;
  y: number;
}
let point: { x: number; y: number } = {
  y: 10,
  x: 20,
};

// Function

//void -> if function returns nothing
// (i: number) => void  --- type annotation
const logNumber: (i: number) => void | number = (id: number): void | number => {
  if (id > 0) {
    return id;
  }
  console.log(id);
};

//when to use annotations ------------------------------------------

//1) Counter the Function that declares any type
const json = '{"x":10,"y":20}';
const cordi: { x: number; y: number } = JSON.parse(json);
console.log(cordi); //{x:10,y:20}

//2) When we declare a variable in one line and initialze on another line
let words = ['nyan', 'grreen', 'red'];
let flag = false;
for (let i = 0; i < words.length; i++) {
  if (words[i] == 'red') {
    flag = true;
  }
}

//3) variable whose type cannot be infered
let number: (string | number)[] = [-1, -2, 3, -4, -5, 'string'];
let numberAboveZero: boolean | number | string = false;
for (let i = 0; i < number.length; i++) {
  if (number[i] > 0) {
    numberAboveZero = number[i];
  }
}
console.log(numberAboveZero, 'from 3 bottom');
