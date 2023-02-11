import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { matchResult } from '../MatchResults';

export class WinsAnalyzer implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let count = 0;
    for (let match of matches) {
      console.log(match);
      if (match[1] === 'Man United' && match[5] === matchResult.HomwWin) {
        count++;
      } else if (
        match[2] === 'Man United' &&
        match[5] === matchResult.AwayWin
      ) {
        count++;
      }
    }
    return `this team ${this.team} has won ${count} times`;
  }
}
