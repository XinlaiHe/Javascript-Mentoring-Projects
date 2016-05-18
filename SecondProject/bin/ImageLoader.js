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
          _this.updateProgressBar();
          if (_this._n == _this._imageArr.length) {
            console.log("All images are loaded!");
          }
        };
        img.onerror = function () {
          console.log(i + 1 + "th image fails to load!");
          _this._n++;
          _this.updateProgressBar();
          if (_this._n == _this._imageArr.length) {
            console.log("All images are loaded!");
          }
        };
      };

      for (var i = 0; i < this._imageArr.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "updateProgressBar",
    value: function updateProgressBar() {

      var bar = document.getElementById("myBar");
      var percent = this._n / this._imageArr.length;
      bar.style.width = percent * 100 + "%";
      if (percent <= 0.33) {
        bar.style.backgroundColor = "red";
      } else if (percent > 0.33 && percent <= 0.66) {
        bar.style.backgroundColor = "yellow";
      } else {
        bar.style.backgroundColor = "green";
      }
    }
  }]);

  return ImageLoader;
}();
//1. promise
//2. progress bar (mocks, spies)

exports.default = ImageLoader;