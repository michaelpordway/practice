"use strict"

let size;
let s = '';

if (process.argv.length > 2) {
    size = process.argv[2];
} else {
    size = 8;
}

for (let i = 1; i <= size; i++) {
    for (let j = 1; j <= size; j++) {
        if (i % 2 === 1){
            s += (j % 2 === 1) ? " " : "#";
        } else {
            s += (j % 2 === 1) ? "#" : " ";
        }
    }
    console.log(s);
    s = '';
}
