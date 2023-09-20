class Employee {
  readonly id: string;
  private salary: number;

  constructor(
    id: string,
    private name: string,
    private age: number,
    private gender: boolean,
    private scale: number
  ) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.gender = gender;
    this.scale = scale;
    this.salary = this.scale * 1300000;
  }

  get getSalary(): number {
    return this.salary;
  }
  
  get getInfo(): {
    name: string;
    id: string;
    age: number;
    gender: boolean;
    salary: number;
    scale: number;
  } {
    return {
      name: this.name,
      id: this.id,
      age: this.age,
      scale: this.scale,
      gender: this.gender,
      salary: this.getSalary,
    };
  }
}

type STAFF = {
  name: string;
  id: string;
  age: number;
  gender: boolean;
  salary: number;
  scale: number;
};
class Company {
  private staffs: STAFF[] = [];

  addStaff(staff: STAFF) {
    this.staffs.push(staff);
  }

  deleteStaff(id: string) {
    const index = this.staffs.findIndex((staff) => staff.id === id);
    this.staffs.splice(index, 1);
  }
  readStaff() {
    this.staffs.forEach((staff) => {
      console.log(staff);
    });
  }
  updateStaff(newStaff: STAFF) {
    const index = this.staffs.findIndex((staff) => staff.id === newStaff.id);
    this.staffs.splice(index, 1, newStaff);
  }

  getStaff(id: string) {
    const staff = this.staffs.find((staff) => staff.id === id);
    return staff;
  }
}

const employee_1 = new Employee("ST_1", "Nguyen Van A", 25, true, 1.5);
const employee_2 = new Employee("ST_2", "Nguyen Van B", 25, true, 1.5);

const employee_3 = new Employee("ST_3", "Nguyen Van C", 25, true, 1.5);

const myComPany = new Company();
myComPany.addStaff(employee_1.getInfo);
myComPany.addStaff(employee_2.getInfo);
myComPany.addStaff(employee_3.getInfo);

console.log("Kiem tra nhan vien cong ty", myComPany.readStaff());

myComPany.deleteStaff("ST_2");
console.log("Kiem tra nhan vien cong ty xoa", myComPany.readStaff());

function editStaff() {
  const newData = {
    id: "ST_3",
    scale: 21,
  };
  const staff = myComPany.getStaff("ST_3");
  if (staff) {
    const newStaff = { ...staff, ...newData };
    myComPany.updateStaff(newStaff);
  }

  console.log("Kiem tra nhan vien cong ty edit", myComPany.readStaff());
}

editStaff();
