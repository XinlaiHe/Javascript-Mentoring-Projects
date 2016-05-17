"use strict";

const webpack = require('webpack');

module.exports = {
    entry: './bin/app.js',
    output: {
        path: './',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }

}