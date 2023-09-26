"use strict";
const animals = ["dog"];
const numbers = [1, 2, 4, 5];
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return a;
}
function sum_2(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
}
console.log(sum(1, 3));
console.log(sum("A", "Nguyễn"));
function concatArray(a, b) {
    const c = a.concat(b);
    return c;
}
concatArray([1, 2], [3, 5, 7]);
concatArray(["a", "b"], ["c"]);
const number = [1, 2, 4];
const str = [3, 5, 7];
const newData = number.concat(str);
function merge(a, b) {
    return Object.assign(a, b);
}
const nameUser = { name: "Nguyễn Văn A" };
const data = merge(nameUser, { age: 20 });
console.log("Kiểm tra object", data, nameUser);
console.log(data.age);
function mergeG(a, b) {
    return Object.assign(a, b);
}
const data_2 = mergeG(nameUser, { age: 20 });
console.log(data_2.name);
function countAndDes(element) {
    let description = " có " + element.length + " phần tử";
    return [element, description];
}
function countAndDes2(element) {
    let description = " có " + element.length + " phần tử";
    return [element, description];
}
console.log("Hello world");
console.log([1, 2]);
console.log(countAndDes(["Hello world", "sport"]));
function extract(obj, key) {
    return "Value " + obj[key];
}
const newValue = extract({ name: "John", age: 10, address: "DN" }, "name");
console.log(newValue);
const user = {
    name: "Nguyễn Văn A",
    email: "",
    username: "Halo",
};
const inputElements = document.querySelectorAll("input");
inputElements.forEach((input) => {
    input.addEventListener("input", () => {
        const key = input.name;
        changeValueUser(user, key, input.value);
        console.log(user);
    });
});
function changeValue(obj, key, value) {
    obj[key] = value;
}
function changeValueUser(obj, key, value) {
    obj[key] = value;
}
const user_2 = {
    name: "",
    username: "",
    email: "",
};
const user_3 = {
    name: "",
    age: 20,
};
changeValueUser(user_2, "name", "Nguyễn Văn A");
changeValue(user_3, "age", 30);
console.log("Kiểm tra user 2", user_2);
console.log("Kiểm tra user 3", user_3);
class Info {
    constructor(_value) {
        this._value = _value;
    }
    get value() {
        return this._value;
    }
    set setValue(number) {
        this._value = 2;
    }
}
class InfoG {
    constructor(_value) {
        this._value = _value;
    }
    get value() {
        return this._value;
    }
}
const string_1 = new Info("RK");
const string_2 = new InfoG("RK");
const number_2 = new InfoG(2);
const obj_2 = new InfoG({ name: "Tèo" });
console.log("Kiểm tra dữ liệu", string_1.value);
const arr4 = [1, 23, 434234, 5];
const arr5 = new Array(1, 2, 4, 546, 5);
class CloneArray {
    constructor() {
        this.value = [];
    }
    add(item) {
        this.value.push(item);
    }
    sum() {
        if (typeof this.value[0] === "number") {
            return this.value.reduce((pre, current) => pre + current, 0);
        }
        return "Mảng không phải số nên không thể tính tổng";
    }
    get getArray() {
        return this.value;
    }
}
const numbers_1 = new CloneArray();
numbers_1.add(2);
numbers_1.add(2);
numbers_1.add(10);
console.log("Kiểm tra mảng", numbers_1.getArray);
console.log("Kiểm tra mảng", numbers_1.sum());
class CloneArrayG {
    add(...items) {
        this.value.push(...items);
    }
    sum() {
        const sum = this.value.reduce((pre, current) => {
            if (typeof current === "number") {
                return pre + current;
            }
            return 0;
        }, 0);
        if (typeof this.value[0] === "number") {
            return sum;
        }
        return "Phần tử mảng không phải là số nên không thể tính tổng";
    }
    get getArray() {
        return this.value;
    }
    constructor(...args) {
        this.value = [];
        this.value = args;
    }
}
const string_arr = new CloneArrayG("Hi", "Ha", "hahaha");
string_arr.add("hello", "Hiệu", "Việt");
string_arr.add("world");
console.log("Kiểm tra string", string_arr.getArray);
console.log("Kiểm tra sum của string", string_arr.sum());
