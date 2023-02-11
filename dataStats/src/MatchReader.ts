import { matchResult } from './MatchResults';
import { dateStringToDate } from './Utils';
import { MatchData } from './MatchData';
import { CsvReader } from './CsvReader';
interface DataReader {
  read(): void;
  data: string[][];
}
export class MatchReader {
  static FromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvReader(fileName));
  }
  matchData: MatchData[] = [];
  constructor(public reader: DataReader) {}
  load(): void {
    this.reader.read();
    this.matchData = this.reader.data.map((item: string[]): MatchData => {
      return [
        dateStringToDate(item[0]),
        item[1],
        item[2],
        Number(item[3]),
        Number(item[4]),
        item[5] as matchResult,
        item[6],
      ];
    });
  }
}
