const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
 function css () {
    return src ("src/scss/*.scss")
    .pipe(sass().on("error",sass.logError))
    .pipe(dest('dist/css'));

 }

exports.css=css;
exports.default = function() {
    watch("src/scss/*.scss",css);
}