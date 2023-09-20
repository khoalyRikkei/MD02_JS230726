function handleCRUD(): void {
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
  readonly id: string;
  private name: string;
  private age: number;
  constructor(name: string, age: number, id: string) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  //   Phương thức

  get getInfo(): { name: string; age: number; id: string } {
    return {
      name: this.name,
      age: this.age,
      id: this.id,
    };
  }

  set setName(name: string) {
    this.name = name;
  }
  set setAge(age: number) {
    this.age = age;
  }
}

const student_1 = new Student("A", 20, "SV01");

class ClassRoom {
  private students: Student[] = [];

  //   Phương thức của lớp
  addStudent(student: Student) {
    this.students.push(student);
  }

  deleteStudent(id: string) {
    const index = this.students.findIndex((student) => student.id === id);
    this.students.splice(index, 1);
  }
  renderStudent() {
    this.students.forEach((student) => {
      console.log(student.getInfo);
    });
  }

  updateStudent(newData: { id: string; [key: string]: any }) {
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

let number: string[] = ["", "2"];
