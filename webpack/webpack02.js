module.exports = {
    entry:  './src',
    output: {
        path:     'builds',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test:   /\.js/,
                loader: 'babel',
                // below, telling webpack ONLY inlcude this directory
                include: __dirname + '/src',
            }
        ],
    }
};
