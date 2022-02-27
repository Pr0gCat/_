/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { task, src, dest, series } = require('gulp');
const nearley = require('./helpers/gulp-ne2ts');
const del = require('del');
const tsc = require('gulp-typescript').createProject('tsconfig.json');

// Task for compile nearly code
task('build:nearley', () =>
    src('src/**/*.ne')
        .pipe(nearley())
        .pipe(dest('src/'))
);

// Task for compile typescript code
task('build:ts', () =>
    src('src/**/*.ts')
        .pipe(tsc())
        .pipe(dest('dist/'))
);

/*
    Main tasks for build this project
*/

task('default', series('build:nearley', 'build:ts'));

task('clean', (cb) => {
    // remove dist folder and .ne.ts files in src folder
    const deleted = del.sync(['dist', 'src/**/*.ne.ts']);
    if (deleted.length) {
        console.log('Deleted\n', deleted.join('\n'));
    } else {
        console.log('Nothing to delete');
    }

    cb();
});