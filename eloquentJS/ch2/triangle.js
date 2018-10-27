"use strict"

// let max = process.argv[0];
let max = 7;
let s = ""

for (let i = 1; i <= max; i++, s = "") {
    for (let j = 1; j <= i; j++) {
        s+= "#";
    }
    console.log(s);
}
