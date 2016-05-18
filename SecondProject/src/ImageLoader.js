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
        this.updateProgressBar();
        if(this._n == this._imageArr.length){
          console.log("All images are loaded!");
        }
      }
      img.onerror = () => {
        console.log((i +1) + "th image fails to load!");
        this._n++;
        this.updateProgressBar();
        if(this._n == this._imageArr.length){
          console.log("All images are loaded!");
        }
      }
    }
  }
  updateProgressBar() {

    let bar = document.getElementById("myBar");
    let percent = this._n / this._imageArr.length;
    bar.style.width = percent * 100  + "%";
    if(percent <= 0.33) {
      bar.style.backgroundColor = "red"
    }else if(percent > 0.33 && percent <= 0.66) {
      bar.style.backgroundColor = "yellow"
    }else{
      bar.style.backgroundColor = "green";
    }
  }

}
//1. promise
//2. progress bar (mocks, spies)