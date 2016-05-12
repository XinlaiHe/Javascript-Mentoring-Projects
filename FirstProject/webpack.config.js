"use strict";

const webpack = require('webpack');

module.exports = {
    entry: './lib/app.js',
    output: {
        path: './bin',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }

}