"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalyzer = void 0;
const MatchResults_1 = require("../MatchResults");
class WinsAnalyzer {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let count = 0;
        for (let match of matches) {
            console.log(match);
            if (match[1] === 'Man United' && match[5] === MatchResults_1.matchResult.HomwWin) {
                count++;
            }
            else if (match[2] === 'Man United' &&
                match[5] === MatchResults_1.matchResult.AwayWin) {
                count++;
            }
        }
        return `this team ${this.team} has won ${count} times`;
    }
}
exports.WinsAnalyzer = WinsAnalyzer;
