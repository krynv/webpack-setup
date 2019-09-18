const path = require('path');

const babelEslintLoader = {
    test: /\.(js)$/,
    exclude: /node_modules/,
    use: ['babel-loader', "eslint-loader"]
};

const urlLoader = {
    test: /\.(woff|woff2)$/,
    exclude: /node_modules/,
    use: ['url-loader']
};

const styleLoader = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
}

module.exports = {
    entry: './src/js/index.js', // entry point
    output: {
        path: path.join(__dirname, 'dist', 'js'),
        publicPath: '/',
        filename: 'app.bundle.js'
    },

    module: {
        rules: [babelEslintLoader, urlLoader, styleLoader]
    },
    resolve: {
        extensions: ['*', '.js']
    },

    devServer: {
        contentBase: './dist' // where it looks for our index.html
    }
};