export default class ImageLoader{

  constructor(imageArr){
    this._imageArr = imageArr;
    this._n = 0;
  }

  load() {

    console.log("Begin to load " + this._imageArr.length + " images");

    for(let i = 0; i <　this._imageArr.length; i++){

      let promise = new Promise( (resolve, reject) => {

          let img = new Image();
          img.src = this._imageArr[i];
          img.onload = () => {
            resolve(i);
          }
          img.onerror = () => {
            reject(i);
          }
      });
      promise.then( (msg) => {
         console.log((msg + 1) + "th image is loaded!");
         this._n++;
         if(this._n == this._imageArr.length){
          console.log("All images are loaded!");
         }
         this.updateProgressBar();
      }).catch( (msg) => {
         console.log((msg + 1) + "th image fails to load!");
      });
    }
  }
  updateProgressBar() {

    let bar = document.getElementById("myBar");
    let percent = this._n / this._imageArr.length;
    bar.style.width = percent * 100  + "%";
    bar.innerHTML = bar.style.width;
    bar.style.color = "white";
    if(percent <= 0.33) {
      bar.style.backgroundColor = "red"
    }else if(percent > 0.33 && percent <= 0.66) {
      bar.style.backgroundColor = "yellow";

    }else{
      bar.style.backgroundColor = "green";
    }
  }

}
//1. promise
//2. progress bar (mocks, spies)