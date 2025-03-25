const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    //pegar os arquivos fontes
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed'}))
    //mandar esses arquivos para uma pasta
    .pipe(gulp.dest('./dist/css'));
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}