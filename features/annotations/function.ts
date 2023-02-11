let add = (a: number, b: number): number => {
  return a + b;
};
function divide(a: number, b: number): number {
  return a / b;
}
const multi = function (a: number, b: number): number {
  return a * b;
};
const throwError = (a: string): never => {
  if (a) {
    throw new Error('a is missing');
  }
  while (true) {
    console.log('');
  }
};
const person = {
  fname: 'nayan',
  lname: 'hanchate',
};
const personDetails = ({
  fname,
  lname,
}: {
  fname: string;
  lname: string;
}): void => {
  console.log(fname);
  console.log(lname);
};
