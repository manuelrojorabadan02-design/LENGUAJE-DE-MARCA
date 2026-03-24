const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

function compileSass() {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./dist/css'));
}

function watchSass() {
    gulp.watch('./src/scss/**/*.scss', compileSass);
}

exports.compile = compileSass;
exports.watch = watchSass;
exports.default = gulp.series(compileSass, watchSass);
