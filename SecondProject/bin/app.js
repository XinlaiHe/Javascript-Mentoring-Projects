"use strict";

var _ImageLoader = require("./ImageLoader");

var _ImageLoader2 = _interopRequireDefault(_ImageLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var i = new _ImageLoader2.default(["images/1.png", "images/2.png"]);

i.load();