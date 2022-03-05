"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const moo = __importStar(require("moo"));
const lexer = moo.compile({
    NL: { match: /\n/, lineBreaks: true },
    _WS: { match: /\s+/, lineBreaks: false },
    Comment: { match: /\/\/.*/, lineBreaks: false },
    MDComment: {
        match: /@md\n[^]*?\n@end/,
        lineBreaks: true,
        value: (x) => x.slice(4, -5)
    },
    Directive: {
        match: /@[a-zA-Z_]\w*/,
        type: moo.keywords({
            PackedModifier: '@packed',
            ExternalModifier: '@external'
        })
    },
    Identifier: {
        match: /[a-zA-Z_][a-zA-Z0-9_]*/,
        type: moo.keywords({
            PublicModifier: 'pub',
            // Keywords
            BooleanTrue: 'true',
            BooleanFalse: 'false',
            Continue: 'continue',
            Break: 'break',
            Let: 'let',
            From: 'from',
            Import: 'import',
            As: 'as',
            Function: 'fn',
            Return: 'return',
            If: 'if',
            Else: 'else',
            Elif: 'elif',
            Match: 'match',
            For: 'for',
            While: 'while',
            Not: 'not',
            Or: 'or',
            And: 'and',
            In: 'in',
            Of: 'of',
            Typeof: 'typeof',
            // Primitive types
            TypeBoolean: 'bool',
            TypeString: 'str',
            TypeChar: 'char',
            TypeAscii: 'ascii',
            TypeBit: 'bit',
            TypeStruct: 'struct',
            TypeEnum: 'enum',
            I8: 'i8',
            I16: 'i16',
            I32: 'i32',
            I64: 'i64',
            U8: 'u8',
            U16: 'u16',
            U32: 'u32',
            U64: 'u64',
            F32: 'f32',
            F64: 'f64',
            // Operators
            Add: '+',
            Sub: '-',
            Mul: '*',
            Div: '/',
            Mod: '%',
            Pow: '**',
            BinNot: '!',
            BinOr: '|',
            BinAnd: '&',
            BinXor: '^',
            BinShl: '<<',
            BinShr: '>>',
            Increment: '++',
            Decrement: '--',
            ParenLeft: '(',
            ParenRight: ')',
            BraceLeft: '{',
            BraceRight: '}',
            BracketLeft: '[',
            BracketRight: ']',
            Assign: '=',
            AddAssign: '+=',
            SubAssign: '-=',
            MulAssign: '*=',
            DivAssign: '/=',
            ModAssign: '%=',
            Equal: '==',
            NotEqual: '!=',
            LessThan: '<',
            GreaterThan: '>',
            LessThanEqual: '<=',
            GreaterThanEqual: '>=',
            // Other
            Colon: ':',
            Semicolon: ';',
            Comma: ',',
            Dot: '.',
            QuestionMark: '?',
            At: '@',
            FlowArrow: '=>',
            Hash: '#',
            Dollar: '$'
        })
    },
    DecNumber: { match: /0|[1-9]\d+/ },
    HexNumber: {
        match: /0x[_0-9a-fA-F]+/,
        value: (x) => x.slice(2)
    },
    BinNumber: {
        match: /0b[_01]+/,
        value: (x) => x.slice(2)
    },
    Floating: { match: /\d*\.\d+/ },
    SciNotation: { match: /(?:\d*\.?\d+)[eE][-]?\d+/ },
    Char: { match: /'(?:[^\\']|\\.)'/ },
    String: [
        {
            match: /[a-z]?"(?:\\["\\]|[^\n"\\])*"/
        },
        {
            match: /"""[^]*?"""/,
            lineBreaks: true,
            value: (x) => x.slice(3, -3)
        }
    ]
});
// Skip whitespaces before passing to parser
lexer.next = () => {
    let tok;
    while ((tok = lexer.next())) {
        if (tok.type !== '_WS') {
            return tok;
        }
    }
};
exports.default = lexer;
