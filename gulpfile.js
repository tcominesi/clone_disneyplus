const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    //pegar os arquivos fontes
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed'}))
    //mandar esses arquivos para uma pasta
    .pipe(gulp.dest('./dist/css'));
}

function images() {
    //pegar os arquivos fontes
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    //mandar esses arquivos para uma pasta
    .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles, images);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}