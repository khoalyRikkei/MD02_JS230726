let a = 10;

var b = 20;

{
  let a = 50;
  var b = 40;
}

const arr = [1, 2, 4];
const obj = { name: "Tuấn" };
const c = 10;
console.log("check a", a);
console.log("check b", b);

// var i = 0
for (i = 0; i < 10; i++) {
  console.log("check", i);
}

console.log("check i global", i);
// for (i = 20; i < 25; i++) {
//   console.log("check 2", i);
// }

// Ví dụ về scope

// Global

var x = 10;
let y = 20;
const z = 30;

// local/function scope

// scope

{
  var x = 1000;
  let y = 2000;
  const z = 3000;
}

function testScope() {
  var x = 100;
  let y = 200;
  const z = 300;
  return x;
}
testScope();
function test2() {
  y = 20;
  return y;
}

console.log(x, y, z);

// Khai báo thông thường

sum(1, 2);

function sum(a, b) {
  return a + b;
}

// arrow function

const sum_1 = (a, b) => {
  return a + b;
};

const sum_2 = (a, b) => a + bb;

((name) => {
  console.log("Hello world " + name);
})("Viễn");
(function (name) {
  console.log("Xin chào " + name);
})("Viễn");

// function renderHeader() {

// }
// renderHeader()

console.log("this là gì?", this);

function CheckThis(name) {
  console.log("Kiểm tra this", this);
  //   this.name = name;
  this.getName = () => console.log("Kiểm tra thissssss", this);
}
// CheckThis();
const newCheck = new CheckThis("Thái");
newCheck.getName();

const person = {
  firstName: "Khoa",
  lastName: "Le",
  getName: function () {
    console.log("test", this);
  },
};

person.getName();

let data = ["a", "b", "c"];

function spread_ex() {
  const numbers = [1, 2, 4, 4];

  let data2 = data;
  const number_2 = [...numbers];
  number_2[0] = 1000;
  data2[0] = 10;

  console.log(numbers, number_2);
  console.log(data, data2);
  checkData();
}

function checkData() {
  console.log(data);
}

const student = {
  name: "Việt",
  age: 18,
  address: "DN",
  gender: "male",
  bankNumber: 1401012343212,
};

const students = [
  student,
  {
    name: "Thái",
    age: 18,
    address: "DN",
    gender: "male",
    bankNumber: 1401012343212,
  },
  {
    name: "Hương",
    age: 16,
    address: "DN",
    gender: "female",
    bankNumber: 1401012343212,
  },
];

function changeStudent() {
  const editStudent = { address: "Quảng nam", age: 28 };
  const newStudent = { ...students[0], ...editStudent };

  students.splice(0, 1, newStudent);

  console.log(students);
}

function rest_ex() {
  function sum(a, b, ...numbers) {
    console.log(numbers);

    console.log(2222, arguments);
    let sum = 0;
    for (let index = 0; index < numbers.length; index++) {
      sum += numbers[index];
    }
    return sum;
  }

  console.log("check", sum(1, 2, 4, 5));

  function getObj(...keys) {}

  getObj(student);
}

function destructuring_ex() {
  const thai = students[1];
  const huong = students[2];

  const [viet, thai1, huong1] = students;

  console.log(thai1);

  const [viet3, ...others] = students;

  console.log("vhiet", viet3);
  console.log("student", others);

  const { address, ...obj } = student;

  console.log(address);
  console.log(obj);
}

const formElement = document.querySelector("#form");
const inputElements = formElement.querySelectorAll(".input-form input");

let user = {};
const names = [];

inputElements.forEach((input) => {
  names.push(input.name);
  input.addEventListener("input", (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    const { name, value } = event.target;

    user[name] = value;
    const error = validator(user);
    renderValidator(error);
  });
  console.log(names);
});

function validator(user) {
  const error = {
    isError: false,
    email: "",
    password: "",
    repeatPassword: "",
    username: "",
    address: "",
  };

  if (!user.email) {
    error.isError = true;
    error.email = "Email không được để trống";
  }
  if (!user.password) {
    error.isError = true;
    error.password = "password không được để trống";
  }
  if (!user.username) {
    error.isError = true;
    error.username = "username không được để trống";
  }
  if (!user.address) {
    error.isError = true;
    error.address = "address không được để trống";
  }
  if (user.password !== user.repeatPassword) {
    error.isError = true;
    error.repeatPassword = "Mật khẩu không trungf";
  }
  console.log(111, error);
  return error;
}

function renderValidator(error) {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((element) => {
    for (const key in error) {
      console.log(element.id.slice(6));
      if (key == element.id.slice(6)) {
        element.textContent = error[key];
      }
    }
  });
}


const ba = {name: "hi"}

ba.age &&( ba.age = 20)

