module.exports = {
    entry: './main.js',
    output: {filename: 'bundle.js'},
    devtool: 'source-map'
    module: {
        loaders: [
            { test: /\.jsx$/, loader: 'jsx-loader' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
