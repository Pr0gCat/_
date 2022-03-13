import semvar from 'semver';

// Do a node version check
if (!semvar.satisfies(process.version, '>=12.0.0')) {
    console.error(
        'Wow, you are using really old node version. \
        You should upgrade to 12.0.0 or higher in order to use this compiler.'
    );
    process.exit(1);
}
