const path = require('path');
module.exports = {
    mode: 'development',
    entry: __dirname + '/client/src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/client/dist'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: __dirname + '/client/src',
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        ]
    }
}