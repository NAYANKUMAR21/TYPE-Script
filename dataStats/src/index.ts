import { MatchReader } from './MatchReader';
import { Sumary } from './Summary';

const matchReader = MatchReader.FromCsv('football.csv');
const summary = Sumary.WinsAnalysesReportWithHtml('Man United');
matchReader.load();

summary.BuildAndPrintReport(matchReader.matchData);
