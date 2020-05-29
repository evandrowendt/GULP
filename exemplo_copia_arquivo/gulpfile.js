const gulp = require('gulp');
const {series, parallel} = require('gulp');

const antes = cb => {
    console.log('Antes');
    return cb()
}

const copy = cb => {
    gulp.src('pastaA/**/*.txt') //copia todos as arquivos .txt  de todas as pastas em pastaA
        .pipe(gulp.dest('pastaB')) //pasta de destino, cria automaticamente caso não exista
    return cb()
}

const fim = cb => {
    console.log('Depois');
    return cb()
}

module.exports.default = parallel(
    antes,
    copy,
    fim,
)