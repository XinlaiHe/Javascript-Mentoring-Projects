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

        var progress_bar = document.createElement("div");
        progress_bar.setAttribute("class", "myProgress");

        var percent = document.createElement("div");
        percent.setAttribute("class", "myBar");

        progress_bar.appendChild(percent);

        document.body.appendChild(progress_bar);

        var request = new XMLHttpRequest();

        request.onprogress = function (e) {

          _this.updateProgressBar(i, e);
        };
        request.onload = function (e) {

          console.log(i + 1 + "th image is loaded!");
          _this.n++;
          if (_this._n == _this._imageArr.length) {

            console.log("All images are loaded!");
          }
        };
        request.onerror = function (e) {

          console.log(i + 1 + "th image fails to load!");
        };

        request.open('GET', _this._imageArr[i], true);
        request.send(null);
      };

      for (var i = 0; i < this._imageArr.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "updateProgressBar",
    value: function updateProgressBar(n, e) {

      var bar = document.querySelectorAll(".myBar")[n];
      var percent = e.loaded / e.total;
      bar.style.width = percent * 100 + "%";
      bar.innerHTML = bar.style.width;
      bar.style.color = "white";
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