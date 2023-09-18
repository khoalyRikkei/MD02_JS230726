// Tự gán type
let number = 20;

// Mình gán type
let username: string = "John";

number = 30;

// Khai báo một function + return giá trị function đó

function sum(a: number, b: number): number {
  return a + b;
}

function renderColor(color: string): void {
  console.log("Màu sắc là", color);
}
renderColor("red");
const test_sum = sum(10, 2);
console.log(1111, test_sum);

const person = {
  name: "Viễn",
  age: 20,
  address: "ĐN",
};

// person.age =21
const student: { name: string; age: number; address: string } = {
  name: "Viễn",
  age: 20,
  address: "ĐN",
};

const numbers = [1, 2, 4, 5, 34, 10];
const animals_1: string[] = ["cat", "dog", "duck", "pig", "chicken"];

console.log(2222, animals_1);
console.log("Hello world");

// Bài tập

// Bài 1: Khai báo 1 sinh viên với các trường thông tin

// Bài 2: Tạo một function tính diện tích hình chữ nhật

// Bài 3: Khai báo danh sách sản phẩm

// Bài 1
const student_test: {
  name: string;
  age: number;
  gender: boolean;
  address: string;
} = {
  name: "Nguyễn Văn A",
  age: 20,
  gender: true,
  address: "ĐN",
};

// Bài 2:

const area = (a: number, b: number): number => {
  return a * b;
};

// Bài 3

const products: { name: string; price: number }[] = [
  {
    name: "product 1",
    price: 20,
  },
  {
    name: "product 2",
    price: 20,
  },
  {
    name: "product 3",
    price: 20,
  },
  {
    name: "product 4",
    price: 20,
  },
];

products.push({ name: "product 5", price: 30 });

console.log(products, 3333333);

console.log("hi");

// Dùng tsc name_file --> để compiler sang js

// Dùng tsc name_file --watch --> vừa compiler sang js vừa ghi nhận sự thay đổi của file

// Hello


// npm init --> enter đến khi tạo ra package.json
// Vào package.jso --> tạo key trong scripts -->  "start": "tsc --watch -w"


