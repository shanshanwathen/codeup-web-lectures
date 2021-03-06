"use strict";

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


// Math.round()
console.log(Math.round(20.49));   // 20
console.log(Math.round(20.5));    // 21
console.log(Math.round(-20.5));   // -20
console.log(Math.round(-20.51));  // -21

// Math.ceil(x)
console.log("Math.ceil(20.0008): " + Math.ceil(20.0008));

// Math.floor(x)
console.log("Math.floor(20.999999): " + Math.floor(20.999999));

// 2 raised to the 16 power
console.log(Math.pow(2, 16)); // 65536

// square root
console.log("Math.sqrt(9): " + Math.sqrt(9));