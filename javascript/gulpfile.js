const { series, parallel } = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function transformacaoJS(cb){
    return gulp.src('src/**/*.js')
            .pipe(babel({ //transpila patra versão de JS mais suportada pelos browsers
                comments: false, //os comentários dos arquivos não serão copiados
                presets: ["env"]
            }))
            .pipe(uglify()) //minifica os arquivos
            .on('error', err => console.log(err))
            .pipe(concat('script.min.js')) //concatena
            .pipe(gulp.dest('build'))
}

function fim(cb){
    console.log('FIM!!!')
    return cb()
}

exports.default = parallel( //mesmo chamando o fim depois, ele executa primeiro, pois leva menos tempo
    transformacaoJS,
    fim,
)