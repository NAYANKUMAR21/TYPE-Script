import { CsvReader } from './CsvFileReader';
import { dateStringToDate } from './Utils';
import { matchResult } from './MatchResults';
type MatchData = [Date, string, string, number, number, matchResult, string];
export class MatchReader extends CsvReader<MatchData> {
  mapRow(item: string[]): MatchData {
    return [
      dateStringToDate(item[0]),
      item[1],
      item[2],
      Number(item[3]),
      Number(item[4]),
      item[5] as matchResult,
      item[6],
    ];
  }
}
