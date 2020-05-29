#GULP

* Em projeto real qundo o navegador vai renderizar a pagina, ele faz centenas de request para o servidor, trazendo cada arquivo individulmente, após trazer o index.html;

* Eecutar (npm i -g gulp-cli) para instalar;

* executar (gulp --help) para mostrar opções;

* Gulp permite pegar todos os arquivos do projeto e gerar um workflow (junta todos os arquivos em apenas alguns) para o ambiente de produção, assim o navegador não precisa realizar centenas de request ao servidor cada vez que a pagina for acessada;

* compila TypeScript em JS;

* Executa tarefas em paralelo, porem pode ser executado em serie também;

* o gulp é executado no terminal usando o comando (gulp), porém deve ser executado no diretório que contenha o arquivo gulpfile.js;

* tasks em serie executam uma de cada vez;

* tasks em paralelo iniciam todas juntas;

*Exemplo: para executar em serie basta trocar o parallel para series, podem ser feitos chamadas parallel dentro de series;
module.exports.default = parallel(
    antes1,
    antes2,
    copiar,
    fim,
)

* Pode-se copiar arquivos de um diretório para outro:
const copy = cb => {
    gulp.src('pastaA/**/*.txt') //copia todos as arquivos .txt  de todas as pastas em pastaA
        .pipe(gulp.dest('pastaB')) //pasta de destino, cria automaticamente caso não exista
    return cb()
}

module.exports.default = parallel(
    antes,
    copy,
    fim,
)

pode-se encadear diversos .pipe, para realizar alterações nos arquivos originais;

* uglify serve para minificar os arquivos, tirando espaços em branco;

* babel serve para transformar JS muito atual em versão que tem maior suporte dos browser;

* concat justa arquivos em um só;

 *EXEMPLO:
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

* GULP pode transpilar codigo TypeScript em JS, ver diretório typeScript;

*Gulp tambem pode ser usado para trasnformar arquivo SASS e SCSS em arquivo CSS nativo, basta importar (gulp-sass)