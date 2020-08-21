const gulp = require('gulp')
const connect = require('gulp-connect');
const imagemin = require('gulp-imagemin');

function image() {
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest("tmp/assets/img"))
        .pipe(connect.reload());
}
function buildIMG() {
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest("dist/assets/img"));
}
function watchIMG() {
    return gulp
        .watch("./src/img/*", {
            ignoreInitial: false
        }, image);
}

module.exports = {
    watchIMG,
    buildIMG
}