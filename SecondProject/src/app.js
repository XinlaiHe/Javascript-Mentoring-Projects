import ImageLoader from "./ImageLoader";
require("../styles/main.css");

let i = new ImageLoader(
  [
  "images/2.jpg",
  "images/2.jpg",
  "images/2.jpg",
  "images/2.jpg",
  "images/2.jpg",
  "images/2.jpg"
  ]);

i.load();