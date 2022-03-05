"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Generated automatically by nearley, version unknown
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d) { return d[0]; }
const lexer_1 = __importDefault(require("./lexer"));
;
;
;
;
const grammar = {
    Lexer: lexer_1.default,
    ParserRules: [],
    ParserStart: "",
};
exports.default = grammar;
