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

      console.log("Begin to load " + this._imageArr.length + " images");

      if (this._imageArr.length != 0) {

        this.loadImage(0);
      }
      // for(let i = 0; i <　this._imageArr.length; i++){

      //   let promise = new Promise( (resolve, reject) => {

      //       let img = new Image();
      //       img.src = this._imageArr[i];
      //       img.onload = () => {
      //         resolve(i);
      //       }
      //       img.onerror = () => {
      //         reject(i);
      //       }
      //   });
      //   promise.then( (msg) => {
      //      console.log((msg + 1) + "th image is loaded!");
      //      this._n++;
      //      if(this._n == this._imageArr.length){
      //       console.log("All images are loaded!");
      //      }
      //      this.updateProgressBar();
      //   }).catch( (msg) => {
      //      console.log((msg + 1) + "th image fails to load!");
      //   });
      // }
    }
  }, {
    key: "updateProgressBar",
    value: function updateProgressBar() {

      var bar = document.getElementById("myBar");
      var percent = this._n / this._imageArr.length;
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
  }, {
    key: "loadImage",
    value: function loadImage(i) {
      var _this = this;

      var p = new Promise(function (resolve, reject) {
        var image = new Image();
        image.src = _this._imageArr[i];
        image.onload = function () {
          resolve();
        };
        image.onerror = function () {
          reject();
        };
      });
      if (this._n == this._imageArr.length - 1) {
        return p.then(function () {
          _this._n++;
          _this.updateProgressBar();
          console.log(i + 1 + "th image is loaded and all images are loaded");
        });
      } else {
        return p.then(function () {
          _this._n++;
          _this.updateProgressBar();
          console.log(i + 1 + "th image is loaded!");
          return _this.loadImage(i + 1);
        });
      }
    }
  }]);

  return ImageLoader;
}();
//1. promise
//2. progress bar (mocks, spies)

exports.default = ImageLoader;