"use strict";

var _ImageLoader = require("./ImageLoader");

var _ImageLoader2 = _interopRequireDefault(_ImageLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("../styles/main.css");

var i = new _ImageLoader2.default(["images/2.jpg", "images/2.jpg", "images/2.jpg", "images/2.jpg", "images/2.jpg", "images/2.jpg"]);

i.load();