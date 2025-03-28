const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

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

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}