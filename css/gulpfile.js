const { series, parallel } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');

function transformacaoSASS(cb){
    return gulp.src('src/sass/index.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(uglifycss({"uglifyComments": true}))
            .pipe(concat('estilo.min.css'))
            .pipe(gulp.dest('build/css'))
}

function copiaHTML(cb){
    return gulp.src('src/index.html')
            .pipe(gulp.dest('build'))
}

exports.default = parallel(
    transformacaoSASS,
    copiaHTML,
    )