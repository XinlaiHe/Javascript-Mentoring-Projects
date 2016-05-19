export default class ImageLoader{

  constructor(imageArr){

    this._imageArr = imageArr;
    this._n = 0;
  }

  load() {

    console.log("Begin to load " + this._imageArr.length + " images");

    if(this._imageArr.length != 0){

      this.loadImage(0);
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

   loadImage(i) {

        let p = new Promise( (resolve, reject) => {
          let image = new Image();
          image.src = this._imageArr[i];
          image.onload = () => {
            resolve();
          };
          image.onerror = () => {
            reject();
          };
        });
        if(this._n == this._imageArr.length - 1){
          return p.then( () => {
            this._n++;
            this.updateProgressBar();
            console.log((i + 1) + "th image is loaded and all images are loaded");
          });

        }else{
            return p.then( () => {
              this._n++;
              this.updateProgressBar();
              console.log((i + 1) + "th image is loaded!");
              return this.loadImage(i + 1);
            });
        }
    }

}
//1. promise
//2. progress bar (mocks, spies)

