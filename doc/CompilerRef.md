# The Underscore Compiler Reference

## Phases

1. Collect environment info and initialize related components
2. Start the parallel parser
3. Collect all artifacts from parsers
4. Merge symbol table fragments

## Parallel Parsing

1. Read file content
2. Construct AST and Symbol Table Fragment
3. Apply new task for module imports if we dont have it yet
4. Return AST and Symbol Table Fragment
