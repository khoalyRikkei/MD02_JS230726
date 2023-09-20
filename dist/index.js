"use strict";
class Animal {
    constructor(weight, type, gender) {
        this.weight = weight;
        this.type = type;
    }
    description() {
        console.log("Đây là động vật");
    }
    speak() {
        console.log("----");
    }
    get getType() {
        return this.type;
    }
}
class Carnivore extends Animal {
    constructor(weight, gender) {
        super(weight, "Carnivore", gender);
        this.gender = gender;
    }
    description() {
        console.log("Đây là động vật ăn thịt");
    }
}
class Dog extends Carnivore {
    constructor(weight, gender, name) {
        super(weight, gender);
        this.name = name;
    }
    speak() {
        console.log("Gaau gauu");
    }
}
const dog_1 = new Dog(10, true, "Kiki");
const dog_2 = new Carnivore(20, true);
console.log(1, dog_1);
console.log(2, dog_2);
console.log("chó là loài", dog_1.getType);
dog_1.speak();
dog_2.speak();
dog_2.description();
dog_1.description();
class Shape {
    getArea() { }
}
class Circle extends Shape {
    constructor(width) {
        super();
    }
}
const newCircle = new Circle(2);
newCircle.getArea();
