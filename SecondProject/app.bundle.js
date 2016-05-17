/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _ImageLoader = __webpack_require__(1);

	var _ImageLoader2 = _interopRequireDefault(_ImageLoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var i = new _ImageLoader2.default(["images/1.png", "images/2.png"]);

	i.load();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ImageLoader = function () {
	  function ImageLoader(imageArr) {
	    _classCallCheck(this, ImageLoader);

	    this._imageArr = imageArr;
	    this._n = 0;
	  }

	  _createClass(ImageLoader, [{
	    key: "load",
	    value: function load() {
	      var _this = this;

	      console.log("Begin to load " + this._imageArr.length + " images");

	      var _loop = function _loop(i) {
	        var img = new Image();
	        img.src = _this._imageArr[i];
	        img.onload = function () {
	          console.log(i + 1 + "th image is loaded!");
	          _this._n++;
	          if (_this._n == _this._imageArr.length) {
	            console.log("All images are loaded!");
	          }
	        };
	        img.onerror = function () {
	          console.log(i + 1 + "th image fails to load!");
	          _this._n++;
	          if (_this._n == _this._imageArr.length) {
	            console.log("All images are loaded!");
	          }
	        };
	      };

	      for (var i = 0; i < this._imageArr.length; i++) {
	        _loop(i);
	      }
	    }
	  }]);

	  return ImageLoader;
	}();
	//1. promise
	//2. progress bar (mocks, spies)

	exports.default = ImageLoader;

/***/ }
/******/ ]);