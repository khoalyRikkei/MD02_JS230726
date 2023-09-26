class Animal {
  static info() {
    console.log("Động vật");
  }
  private weightMax = 1000;
  public height = 1000;

  constructor(private name: string, private type: string) {
    this.name = name;
    this.type = type;
  }
  get _name() {
    return this.name;
  }
  protected get _type() {
    return this.type;
  }

  eat(food: string) {
    console.log(this._name + " eats " + food + " becauese it is " + this._type);
  }
}

abstract class Carnivores extends Animal {
  abstract eatMeat(): void;
}

class Dog extends Carnivores {
  constructor(name: string, private color: string) {
    super(name, "Carnivores");
    this.color = color;
  }
  eatMeat() {}
}

const pig = new Animal("pig", "Carnivores");

const newDog = new Dog("Kiki", "red");

newDog.eat("gà");

interface IUser {
  firstName: string;
  lastName: string;
  fullName(): string;
}
interface Info_1 {
  name: string,
  age: number,
}

class Person {
  constructor(private user: Info_1) {
    this.user = user;
  }
}
const data__1 = { name: " fgf", age: 20 };

const user_111 = new Person(data__1);

class User implements IUser {
  firstName: string = "A";
  lastName: string = "Nguyễn";
  fullName(): string {
    return this.firstName + this.lastName;
  }
}
