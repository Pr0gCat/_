/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const through = require('through2');

const ne = require('nearley');
const ne_compile = require('nearley/lib/compile');
const ne_lint = require('nearley/lib/lint');
const ne_gen = require('nearley/lib/generate');

const ne_parser = new ne.Parser(
    ne.Grammar.fromCompiled(
        require('nearley/lib/nearley-language-bootstrapped')
    ));

// Gulp plugin for generating nearley grammar in typescript
module.exports = () => through.obj((file, enc, cb) => {
    if (file.isNull()) return cb(null, file);
    if (file.isStream()) return cb(new Error('Streaming not supported'));
    ne_parser.feed(file.contents.toString(enc));
    let grammar = ne_compile(ne_parser.results[0], {});

    ne_lint(grammar, {});

    file.contents = Buffer.from(ne_gen(grammar));
    file.path = file.path + '.ts'; // append .ts to file name
    cb(null, file);
});
