const gulp = require('gulp');
const {series, parallel} = require('gulp')

const antes1 = cb => {
    console.log('Antes 1')
    return cb()
} 

const antes2 = cb => {
    console.log('Antes 2');
    return cb()
}

const fim = cb => {
    console.log('Fim');
    return cb()
} 

function copiar(cb){
    console.log('Hello world');
    return cb()
}

//exemplo de tasks em série
// module.exports.default = series(
//     antes1,
//     antes2,
//     copiar,
//     fim,
// )

//exempo de task em paralelo
module.exports.default = parallel(
    antes1,
    antes2,
    copiar,
    fim,
)