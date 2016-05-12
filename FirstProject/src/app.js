"use strict";

/**
 * Created by Xinlai_He on 12/05/2016.
 */
require("../styles/main.css");
let button = require('./button.js');
button.addEventListener('click',RollDice);

let left_dice= document.querySelector(".left_dice");
let right_dice= document.querySelector(".right_dice");

function RollDice(){

    for(let i = 0 ; i < 6 ; i++) {

       setTimeout( () => {

            let r1 = Math.floor(Math.random() * 6) + 1;

            let r2 = Math.floor(Math.random() * 6) + 1;

           console.log(r1 + r2);

            left_dice.innerHTML = r1;

            right_dice.innerHTML = r2;

        }, 400 * i);
    }
}