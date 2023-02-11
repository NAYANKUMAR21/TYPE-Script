import { Sorter } from './Sorter';

export class NumberCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }
  public compare(Li: number, Ri: number): boolean {
    return this.data[Li] > this.data[Ri];
  }
  public swap(Li: number, Ri: number): void {
    let he = this.data[Li];
    this.data[Li] = this.data[Ri];
    this.data[Ri] = he;
  }
  get length(): number {
    return this.data.length;
  }
  print(): void {
    console.log(this.data);
  }
}
const collection = new NumberCollection([1, 2, 3, 4]);
collection.length;
//with get mdificater we can write length as it
//is without calling method
