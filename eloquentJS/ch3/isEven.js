"use strict"

function isEven(number) {
    if (number < 0)
        number = -number;

    return isEvenHelper(number);
    
    function isEvenHelper(number) {
        if (number === 0)
            return true;
        if (number === 1)
            return false;
        return isEvenHelper(number - 2);
    }
}

if (process.argv.length > 2) {

    console.log(isEven(process.argv[2]));
}
