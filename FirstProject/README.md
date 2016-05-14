#First Project

##The first MP using [Webpack](http://webpack.github.io/docs/) + [Babel](https://babeljs.io/) + [ECMAScript 6](http://es6-features.org/) to build a small and simple webpage that plays dices rolling game!

##Dependencies
###Local Dependencies (can all be installed using npm install, no need to execute followings seperately)
   - babel-cli `npm install --save-dev babel-cli`
   - babel-preset-es2015 `npm install babel-preset-es2015 --save-dev`
   - webpack `npm install webpack --save-dev` (better to have it locally)
   - css loader and style-loader `npm install css-loader style-loader --save-dev`

###Global Dependencies (not necessary)
   - webpack `npm install webpack -g` (in order to use webpack command)

##Configuration
  - .babelrc (configure the conversion between ECMAScript 2015 and Environment Friendly Javascript)
  - webpack.config.js (configure the input file path and output file path for the module bundler)

##Quick Start
 - run `npm install` to install all dependencies
 - run `npm run build` which will run two commands sequentially:
    1. run `babel src -d lib` which convert ECMAScript 2015 code(under `src` folder) to Environment Friendly Javascript code(under `lib` folder)
 	2. run `webpack` which will bundle all the css, js files and output a single bundle js file under `bin` folder
 - run `npm start` and open browser.

