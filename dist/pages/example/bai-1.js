"use strict";
function countChar(str) {
    const result = {};
    for (let index = 0; index < str.length; index++) {
        const key = str[index];
        if (result[key]) {
            result[key]++;
        }
        else {
            result[key] = 1;
        }
    }
    return result;
}
console.log(countChar("hello world 22 A B E * ///"));
