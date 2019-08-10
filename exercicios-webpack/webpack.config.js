// Carrega o webpack
const webpack = require('webpack')

// Coloca em evidência o modulo do node
module.exports = {
    entry: './ex/index.js', // Arquivo inicial
    output: {
        path: __dirname + '/public', // Pasta onde será colocado o arquivo compilado
        filename: './bundle.js' // Nome do arquivo compilado
    },
    devServer: {
        port: 8080, // Porta do Webpack-dev-server
        contentBase: './public' // Onde está os arquivos que ele irá carregar
    }
}