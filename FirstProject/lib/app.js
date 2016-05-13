"use strict";

/**
 * Created by Xinlai_He on 12/05/2016.
 */

var _button = require("./button");

require("../styles/main.css");

_button.start_button.addEventListener('click', RollDice);

var left_dice = document.querySelector(".left_dice");
var right_dice = document.querySelector(".right_dice");


function RollDice() {

            for (var i = 0; i < 6; i++) {

                        setTimeout(function () {

                                    var r1 = Math.floor(Math.random() * 6) + 1;

                                    var r2 = Math.floor(Math.random() * 6) + 1;

                                    console.log(r1 + r2);

                                    left_dice.innerHTML = r1;

                                    right_dice.innerHTML = r2;
                        }, 400 * i);
            }
}