"use strict";
class Shape {
    getInfo() {
        console.log("Hello");
    }
}
class Triangle extends Shape {
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
class Square extends Shape {
    constructor(width) {
        super();
        this.width = width;
        this.width = width;
    }
    getArea() {
        return this.width ** 2;
    }
}
const circle = new Circle(10);
console.log(1111, circle.height);
circle.getInfo();
class User {
    getFullName() {
    }
}
class User_3 {
    constructor() {
        this.phone = "0909";
        this.email = "qk@gmail.com";
    }
}
const arr = [1, 3, 3];
console.log(arr);
class Person {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
        this._name = _name;
        this._age = _age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
}
const person_1 = new Person("a", 20);
person_1.name;
