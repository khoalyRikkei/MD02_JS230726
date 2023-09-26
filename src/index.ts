const animals: Array<string> = ["dog"]; // Array là class có sẵn --> generic

const numbers: number[] = [1, 2, 4, 5]; // khai báo type thông thường

function sum<T>(a: T, b: T) {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return a;
}

function sum_2(a: number | string, b: number | string) {
  if (typeof a === "string" && typeof b === "string") {
    return a + b;
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
}

console.log(sum<number>(1, 3));

console.log(sum<string>("A", "Nguyễn"));

function concatArray<T>(a: T[], b: T[]): T[] {
  const c = a.concat(b);
  return c;
}

concatArray<number>([1, 2], [3, 5, 7]);
concatArray<string>(["a", "b"], ["c"]);

const number = [1, 2, 4];
const str = [3, 5, 7];

const newData = number.concat(str);

function merge(a: object, b: { age: number }) {
  return Object.assign(a, b);
}

const nameUser = { name: "Nguyễn Văn A" };
const data = merge(nameUser, { age: 20 });

console.log("Kiểm tra object", data, nameUser);
console.log(data.age);

function mergeG<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}

const data_2 = mergeG<{ name: string }, { age: number }>(nameUser, { age: 20 });

console.log(data_2.name);

interface Lengthy {
  length: number;
}

function countAndDes<T extends Lengthy>(element: T): [T, string] {
  let description = " có " + element.length + " phần tử";

  return [element, description];
}

function countAndDes2(element: string | any[]) {
  let description = " có " + element.length + " phần tử";

  return [element, description];
}
console.log("Hello world");
console.log([1, 2]);

console.log(countAndDes(["Hello world", "sport"]));

// keyof

function extract<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Value " + obj[key];
}

const newValue = extract({ name: "John", age: 10, address: "DN" }, "name");
console.log(newValue);

// Bài toán

type TUser = {
  name: string;
  email: string;
  username: string;
};

const user: TUser = {
  name: "Nguyễn Văn A",
  email: "",
  username: "Halo",
};

const inputElements = document.querySelectorAll(
  "input"
) as NodeListOf<HTMLInputElement>;

inputElements.forEach((input: HTMLInputElement) => {
  input.addEventListener("input", () => {
    const key = input.name;
    changeValueUser(user, key as keyof TUser, input.value);
    // user[input.name ] = input.value;

    console.log(user);
  });
});

function changeValue<T extends object, U extends keyof object>(
  obj: T,
  key: U,
  value: any
) {
  obj[key] = value;
}

function changeValueUser(obj: TUser, key: keyof TUser, value: string) {
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
// changeValueUser(user_3, "name", "Nguyễn Văn A");
changeValue(user_3, "age" as keyof object, 30);

console.log("Kiểm tra user 2", user_2);
console.log("Kiểm tra user 3", user_3);

// class

class Info {
  private _value: string | number;
  constructor(_value: string) {
    this._value = _value;
  }

  get value() {
    return this._value;
  }
  set setValue(number: number) {
    this._value = 2;
  }
}
class InfoG<T> {
  private _value: T;
  constructor(_value: T) {
    this._value = _value;
  }

  get value() {
    return this._value;
  }
}

const string_1 = new Info("RK");

// const string_2 = new Info(2)

const string_2 = new InfoG("RK");
const number_2 = new InfoG(2);
const obj_2 = new InfoG({ name: "Tèo" });

console.log("Kiểm tra dữ liệu", string_1.value);

const arr4 = [1, 23, 434234, 5];
const arr5 = new Array(1, 2, 4, 546, 5);

// Bài 6: Tạo một class là CloneArray, tạo các phương thức add(), sum()  cho CloneArray

class CloneArray {
  private value: number[] = [];

  add(item: number) {
    this.value.push(item);
  }

  sum(): string | number {
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

class CloneArrayG<T> {
  private value: T[] = [];

  add(...items: T[]) {
    this.value.push(...items);
  }

  sum(): string | number {
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

  constructor(...args: T[]) {
    this.value = args;
  }
}

const string_arr = new CloneArrayG("Hi", "Ha", "hahaha");
string_arr.add("hello", "Hiệu", "Việt");
string_arr.add("world");
console.log("Kiểm tra string", string_arr.getArray);

console.log("Kiểm tra sum của string", string_arr.sum());

// function sum(...rest) {

//     let sum = 0;

// }

// sum(1,2,4,5,6,6)
