export default class ImageLoader{

  constructor(imageArr){
    this._imageArr = imageArr;
    this._n = 0;
  }

  load() {

    console.log("Begin to load " + this._imageArr.length + " images");

    for(let i = 0; i <　this._imageArr.length; i++){
      let img = new Image();
      img.src = this._imageArr[i];
      img.onload = () => {
        console.log((i + 1) + "th image is loaded!");
        this._n++;
        if(this._n == this._imageArr.length){
          console.log("All images are loaded!");
        }
      }
      img.onerror = () => {
        console.log((i +1) + "th image fails to load!");
        this._n++;
        if(this._n == this._imageArr.length){
          console.log("All images are loaded!");
        }
      }
    }
  }
}
//1. promise
//2. progress bar (mocks, spies)