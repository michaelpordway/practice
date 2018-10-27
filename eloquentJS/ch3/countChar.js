"use strict"

function countBs(s) {
    return countChar(s, 'B');
}

function countChar(s, c) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            count++;
        }
    }
    return count;
}
        

if (process.argv.length > 2) {
    if (process.argv[2] === "countBs") {
        console.log(countBs(process.argv[3]));
    }
    if (process.argv[2] === "countChar") {
        console.log(countChar(process.argv[3], process.argv[4]));
    }
}


// console.log(countChar("blahblah" , 'b'));
