import ImageLoader from "./ImageLoader";
require("../styles/main.css");

let i = new ImageLoader(
  [
  "http://animaliaz-life.com/data_images/dog/dog2.jpg",
  "http://cdn.abclocal.go.com/content/wls/images/cms/automation/images/535462_1280x720.jpg",
  "http://www.doglost.co.uk/images/australian-shepherd-dog.jpg",
  "https://pixabay.com/static/uploads/photo/2014/03/14/20/13/dog-287420_960_720.jpg",
  "http://static1.businessinsider.com/image/56c4fe4c2e526553008b7dc7/heres-what-popular-dog-breeds-looked-like-before-and-after-100-years-of-breeding.jpg",
  "https://www.petfinder.com/wp-content/uploads/2012/11/dog-happy-cost-of-dog106419226.jpg"
  ]);

i.load();