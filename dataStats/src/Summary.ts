import { MatchData } from './MatchData';
import { WinsAnalyzer } from './Analyzers/Analyzer';
import { HtmlReport } from './HtmlReport';
export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutPutTarget {
  print(x: string): void;
}

export class Sumary {
  static WinsAnalysesReportWithHtml(team: string): Sumary {
    return new Sumary(new WinsAnalyzer(team), new HtmlReport());
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutPutTarget) {}
  BuildAndPrintReport(matches: MatchData[]): void {
    const saveReport = this.analyzer.run(matches);
    this.outputTarget.print(saveReport);
  }
}
