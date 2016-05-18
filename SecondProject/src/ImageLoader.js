export default class ImageLoader{

  constructor(imageArr){
    this._imageArr = imageArr;
    this._n = 0;
  }

  load() {

    console.log("Begin to load " + this._imageArr.length + " images");

    for(let i = 0; i <　this._imageArr.length; i++){

      let progress_bar = document.createElement("div");
      progress_bar.setAttribute("class", "myProgress");

      let percent = document.createElement("div");
      percent.setAttribute("class", "myBar");

      progress_bar.appendChild(percent);

      document.body.appendChild(progress_bar);

      let request = new XMLHttpRequest();

      request.onprogress = (e) => {

        this.updateProgressBar(i, e);

      };
      request.onload = (e) => {

        console.log((i + 1) + "th image is loaded!");
        this.n++;
        if(this._n == this._imageArr.length){

          console.log("All images are loaded!");
        }
      };
      request.onerror = (e) => {

        console.log((i + 1) + "th image fails to load!");
      };

      request.open('GET', this._imageArr[i], true);
      request.send(null);
    }
  }
  updateProgressBar(n, e) {

    let bar = document.querySelectorAll(".myBar")[n];
    let percent = e.loaded / e.total;
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