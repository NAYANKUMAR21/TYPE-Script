import { matchResult } from './MatchResults';
import fs from 'fs';

//above tuple could also been written as (Date|string| string| number| number| matchResult| string)[]

//TypeData is generic Type works for resuable cmponents or classes as arguments
export abstract class CsvReader<TypeData> {
  data: TypeData[] = [];
  abstract mapRow(item: string[]): TypeData;
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
      })
      .map(this.mapRow);
  }
}
