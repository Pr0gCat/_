export interface Token {
    type: TokenID;
    value?: string; // "content" of the token
    text: string; // whole text of the token
    readonly line: number;
    readonly column: number;
    readonly pos_start: number;
    readonly pos_offset: number;
    readonly length: number;
}

export enum TokenID {
    Unknown = '<unknown>',
    EndOfFile = '<eof>',
    Newline = '<newline>',
    Identifier = '<Identifier>',
    Comment = '<comment>',
    MDComment = '<md-comment>',

    NumberLiteral = '<number>',
    FloatingLiteral = '<float>',
    SciNotationLiteral = '<sci-notation>',
    CharLiteral = '<char>',
    StringLiteral = '<string>',
    BooleanTrue = 'true',
    BooleanFalse = 'false',

    PublicModifier = 'pub',
    ConstantModifier = 'const',
    SomewhereModifier = 'somewhere',

    Continue = 'continue',
    Break = 'break',
    Let = 'let',
    From = 'from',
    Import = 'import',
    As = 'as',
    Func = 'fn',
    Return = 'return',
    If = 'if',
    Else = 'else',
    Elif = 'elif',
    Match = 'match',
    For = 'for',
    While = 'while',
    Not = 'not',
    Or = 'or',
    And = 'and',
    In = 'in',
    Of = 'of',
    Typeof = 'typeof', // for type of operator

    // Primitive types
    TypeBoolean = 'bool',
    TypeString = 'str',
    TypeChar = 'char',
    TypeAscii = 'ascii',
    TypeBit = 'bit',
    TypeStruct = 'struct',
    TypeEnum = 'enum',
    I8 = 'i8',
    I16 = 'i16',
    I32 = 'i32',
    I64 = 'i64',
    U8 = 'u8',
    U16 = 'u16',
    U32 = 'u32',
    U64 = 'u64',
    F32 = 'f32',
    F64 = 'f64',

    Add = '+',
    Sub = '-',
    Mul = '*',
    Div = '/',
    Mod = '%',
    Pow = '**',

    BinNot = '!',
    BinOr = '|',
    BinAnd = '&',
    BinXor = '^',
    BinShl = '<<',
    BinShr = '>>',
    Increment = '++',
    Decrement = '--',
    ParenLeft = '(',
    ParenRight = ')',
    BraceLeft = '{',
    BraceRight = '}',
    BracketLeft = '[',
    BracketRight = ']',

    Assign = '=',
    AddAssign = '+=',
    SubAssign = '-=',
    MulAssign = '*=',
    DivAssign = '/=',
    ModAssign = '%=',

    Equal = '==',
    NotEqual = '!=',
    LessThan = '<',
    GreaterThan = '>',
    LessThanEqual = '<=',
    GreaterThanEqual = '>=',

    Colon = ':',
    Semicolon = ';',
    Comma = ',',
    Dot = '.',
    QuestionMark = '?',
    At = '@',
    FlowArrow = '=>',
    Hash = '#',
    Dollar = '$',

    SSPacked = '@packed'
}
