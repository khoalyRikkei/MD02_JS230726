// 1. abstract class
abstract class Shape {
  getInfo() {
    console.log("Hello");
  }

  abstract getArea(): number;
  public height: number | undefined;
}

abstract class Triangle extends Shape {}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(private width: number) {
    super();
    this.width = width;
  }
  getArea(): number {
    return this.width ** 2;
  }
}

// const new_shape = new Shape()

const circle = new Circle(10);

console.log(1111, circle.height);
circle.getInfo();

//2. Interface và abstract class

interface obj_2 {
  firstName: string | undefined;
  lastName: string | undefined;
  getFullName(): void;
}

class User implements obj_2 {
  firstName: string | undefined;
  lastName: string | undefined;

  // constructor(first: string, last: string) {
  //   this.firstName = first;
  //   // this.lastName = last;
  // }

  getFullName() {
    // return this.firstName + " " + this.lastName;
  }
}

//3. Interface và types

type obj = { firstName: string; lastName: string } & {
  email: string;
  password: string;
};
type user =
  | {
      phone: string;
    }
  | { email: string };

interface phone {
  phone: string | number;
}

interface user_2 extends phone {
  email: string;
}

class User_3 implements user_2 {
  phone: string = "0909";
  email: string = "qk@gmail.com";
}
const arr = [1, 3, 3];

console.log(arr);

class Person {
  constructor(private _name: string, private _age: number) {
    this._name = _name;
    this._age = _age
  }

  get name():string {
    return this._name
  }
  get age():number {
    return this._age
  }
}

const person_1 = new Person("a", 20)
person_1.name
