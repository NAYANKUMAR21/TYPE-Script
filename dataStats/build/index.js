"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.FromCsv('football.csv');
const summary = Summary_1.Sumary.WinsAnalysesReportWithHtml('Man United');
matchReader.load();
summary.BuildAndPrintReport(matchReader.matchData);
