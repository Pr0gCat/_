@preprocessor typescript

@{%
import lexer from './lexer';
%}

@lexer lexer

module: NL:* block import_stmt:* compound_stmt:*

import_stmt: (%From import_item):?

import_item: %String | name_ref

# Misc.

number: %DecNumber | %HexNumber | %BinNumber | %Floating | SciNotation

name_ref: %Identifier (%Dot %Identifier)*
    | %At %Dot %Identifier (%Dot %Identifier)*

value: name_ref
    | number
    | %Char
    | %String
    | %BooleanTrue
    | %BooleanFalse