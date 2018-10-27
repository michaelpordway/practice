"use strict"

let arg1;
let arg2;

function min(a, b) {
    return (a < b) ? a : b;
}

if (process.argv.length > 2) {
    arg1 = Number(process.argv[2]);
    arg2 = Number(process.argv[3]);
    console.log(min(arg1, arg2));
}
