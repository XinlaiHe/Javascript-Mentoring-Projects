#A Project with Less.js


##Command Line Usage

  - `lessc input.less output.css` input less could include all other less files and output will bundle all of them into one css

##Client Side Usage

  - `<link rel="stylesheet/less" type="text/css" href="styles.less" />` should link all less files before js file
  - `<script src="less.js" type="text/javascript"></script>` will automatically compile less files runtime, but all less files are independent, import is not useful

##Server Side Usage

  `var less = require('less');
   var fs = require("fs");
   var src = "foo/bar/baz.less";
   less.render(fs.readFileSync(src).toString(),
        {
          paths: ['.', './lib'],  // Specify search paths for @import directives
          filename: path.resolve(src), // Specify a filename, for better error messages
          compress: true          // Minify CSS output
        },
        function (e, output) {
           fs.writeFileSync("foo/bar/baz.css", output);
        });
  `
