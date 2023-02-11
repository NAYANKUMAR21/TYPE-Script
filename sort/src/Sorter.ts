//we are not writing constructer in interface
//because that is inbuilt with class as class are knowen to be object builders

interface Sortable {
  length: number;
  compare(li: number, ri: number): boolean;
  swap(li: number, ri: number): void;
}
//we can also observe we are not using interface
//abstrach means some methods such as length
//add and compare will eventually exist

//abstract Classes =  is collections of asbstract methods or concraete methods or both
//interface = is collections of just abstract methods

export abstract class Sorter {
  abstract compare(Li: number, Ri: number): boolean;
  abstract swap(Li: number, Ri: number): void;
  abstract length: number;

  sort(): void {
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
