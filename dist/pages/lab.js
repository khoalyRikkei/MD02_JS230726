"use strict";
function sortData(arr, action) {
    if (action === "asc") {
        return arr.sort((a, b) => (a > b ? 1 : -1));
    }
    else {
        return arr.sort((a, b) => (a > b ? -1 : 1));
    }
}
console.log(sortData([1, 2, 4, 5, 10], "desc"));
sortData([1, 2, 4, 5, 10], "asc");
console.log(sortData(["a", "b", "d", "abc"], "desc"));
sortData(["a", "b", "d"], "asc");
function addData(target, data) {
    target.push(data);
    return target;
}
const arr = [1, 2, 4];
const arr_2 = [1, 2, 4, "string"];
arr_2.push("string");
const arr_3 = [1];
addData([1, 2, 4, 5], 2);
addData(["5"], "dd");
function checkContainer(value, data) {
    return data.includes(value);
}
console.log("Kiểm tra giá trị có trong mảng hay không:", checkContainer("a", ["a", "b", "c"]));
console.log("Kiểm tra giá trị có trong mảng hay không 2:", checkContainer(1, [2, 3, 4]));
function findMax(data) {
    let max = data[0];
    data.forEach((item) => {
        if (item > max) {
            max = item;
        }
    });
    return max;
}
function readObject(object) {
    for (const key in object) {
        console.log(key + " có giá trị là: " + object[key]);
    }
}
readObject({ name: "Nguyễn Văn A", age: 20 });
