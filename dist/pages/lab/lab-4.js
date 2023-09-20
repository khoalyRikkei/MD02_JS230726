"use strict";
function handleCRUD() {
    const selected = prompt("Chọn  C/R/U/D");
    const myClass = new ClassRoom();
    switch (selected) {
        case "C":
            myClass.addStudent(student_1);
            break;
        case "R":
            break;
        case "U":
            const newData = { name: "B", id: "SV01" };
            myClass.updateStudent(newData);
            break;
        case "D":
            myClass.deleteStudent("SV01");
            break;
        default:
            alert("Chọn đúng C/R/U/D");
            break;
    }
}
class Student {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    get getInfo() {
        return {
            name: this.name,
            age: this.age,
            id: this.id,
        };
    }
    set setName(name) {
        this.name = name;
    }
    set setAge(age) {
        this.age = age;
    }
}
const student_1 = new Student("A", 20, "SV01");
class ClassRoom {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    deleteStudent(id) {
        const index = this.students.findIndex((student) => student.id === id);
        this.students.splice(index, 1);
    }
    renderStudent() {
        this.students.forEach((student) => {
            console.log(student.getInfo);
        });
    }
    updateStudent(newData) {
        const newStudents = this.students.map((student) => {
            if (newData.id == student.id) {
                const test = { ...student, ...newData };
                console.log(111, test);
            }
            return student;
        });
        this.students = newStudents;
    }
}
let number = ["", "2"];
