import { Sorter } from './Sorter';

export class charcCollections extends Sorter {
  constructor(public data: string) {
    super();
  }
  get length(): number {
    return this.data.length;
  }
  compare(Li: number, Ri: number): boolean {
    return (
      this.data[Li].toLocaleLowerCase() > this.data[Ri].toLocaleLowerCase()
      //< descending >ascending
    );
  }
  swap(Li: number, Ri: number): void {
    let chars = this.data.split('');

    const he = chars[Li];
    chars[Li] = chars[Ri];
    chars[Ri] = he;
    this.data = chars.join('');
  }
  print(): void {
    console.log(this.data);
  }
}
