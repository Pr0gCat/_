import * as moo from 'moo';

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
            // the reason of this modifier not being one of the directives is
            //  that it must attach to something.
            PublicModifier: 'public',

            // Keywords
            BooleanTrue: 'true',
            BooleanFalse: 'false',
            Continue: 'continue',
            Break: 'break',
            Let: 'let',
            From: 'from',
            Import: 'import',
            As: 'as',
            Function: 'func',
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
            To: 'to',
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

export default lexer;
