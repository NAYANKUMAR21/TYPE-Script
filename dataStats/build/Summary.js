"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sumary = void 0;
const Analyzer_1 = require("./Analyzers/Analyzer");
const HtmlReport_1 = require("./HtmlReport");
class Sumary {
    static WinsAnalysesReportWithHtml(team) {
        return new Sumary(new Analyzer_1.WinsAnalyzer(team), new HtmlReport_1.HtmlReport());
    }
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    BuildAndPrintReport(matches) {
        const saveReport = this.analyzer.run(matches);
        this.outputTarget.print(saveReport);
    }
}
exports.Sumary = Sumary;
