"use strict";
function findArr(arr) {
    let iStartArr = 0;
    let arr_start_i = 0;
    let arr_current_i = 0;
    let arr_end_i = 0;
    let max = arr[0];
    for (let index = 1; index < arr.length; index++) {
        const number = arr[index];
        if (max + number < number) {
            arr_current_i = index;
            max = number;
        }
        else {
            max += number;
        }
    }
}
findArr([-2, 10, -3, 4, -1, 2, 1, -5, 4]);
