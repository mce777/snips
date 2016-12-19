{
    test:    /\.js/,
    loader:  'babel',
    include: __dirname + '/src',
},
{
    test:   /\.scss/,
    loader: 'style!css!sass',
    // Or this....
    loaders: ['style', 'css', 'sass'],
},
{
    test:   /\.html/,
    loader: 'html',
}
