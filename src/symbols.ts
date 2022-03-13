class ScopeSymbol {
    constructor(
        public childrens: (
            | VariableSymbol
            | FunctionSymbol
            | StructSymbol
            | EnumSymbol
        )[],
        public scopes: ScopeSymbol[],

        public parent: ScopeSymbol | undefined,

        public isModule: boolean
    ) {}
}

class VariableSymbol {}

class FunctionSymbol {}

class StructSymbol {}

class EnumSymbol {}

export class SymbolTable {
    // this is a singleton
    static instance: SymbolTable;

    public static getSymbolTable(): SymbolTable {
        if (!SymbolTable.instance) {
            SymbolTable.instance = new SymbolTable();
        }
        return SymbolTable.instance;
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    public getSymbol(
        name: string
    ):
        | ScopeSymbol
        | VariableSymbol
        | FunctionSymbol
        | StructSymbol
        | EnumSymbol
        | undefined {
        return undefined;
    }
}
