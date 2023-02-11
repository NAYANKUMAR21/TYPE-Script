import fs from 'fs';

//above tuple could also been written as (Date|string| string| number| number| matchResult| string)[]
export class CsvReader {
  data: string[][] = [];

  constructor(public fileName: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.fileName, { encoding: 'utf-8' })
      .split('\n')
      .map((item: string): string[] => {
        let x = item.split(',');
        Number(x[3]);
        Number(x[4]);
        return x;
      });
  }
}
