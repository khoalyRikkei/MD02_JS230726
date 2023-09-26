"use strict";
class Animal {
    static info() {
        console.log("Động vật");
    }
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.weightMax = 1000;
        this.height = 1000;
        this.name = name;
        this.type = type;
    }
    get _name() {
        return this.name;
    }
    get _type() {
        return this.type;
    }
    eat(food) {
        console.log(this._name + " eats " + food + " becauese it is " + this._type);
    }
}
class Carnivores extends Animal {
}
class Dog extends Carnivores {
    constructor(name, color) {
        super(name, "Carnivores");
        this.color = color;
        this.color = color;
    }
    eatMeat() { }
}
const pig = new Animal("pig", "Carnivores");
const newDog = new Dog("Kiki", "red");
newDog.eat("gà");
class Person {
    constructor(user) {
        this.user = user;
        this.user = user;
    }
}
const data__1 = { name: " fgf", age: 20 };
const user_111 = new Person(data__1);
class User {
    constructor() {
        this.firstName = "A";
        this.lastName = "Nguyễn";
    }
    fullName() {
        return this.firstName + this.lastName;
    }
}
