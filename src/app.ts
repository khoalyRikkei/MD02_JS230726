class Person {
  private name: string;
  private yoB: number;
  constructor(name: string, yoB: number) {
    this.name = name;
    this.yoB = yoB;
  }
  get getAge() {
    const year = Number(new Date().getFullYear());
    return year - this.yoB;
  }
}

class User extends Person {
  readonly id: string;
  private role: string;
   gender: boolean = true;
  constructor(
    id: string,
    name: string,
    yoB: number,
    role: string,
    address: string
  ) {
    super(name, yoB);
    this.id = id;
    this.role = role;
  }
  set setRole(role: string) {
    this.role = role;
  }
}

class Admin extends User {
  constructor(id: string, name: string, yoB: number, address: string) {
    super(id, name, yoB, "admin", "DN");
  }
}

const admin_1 = new Admin("001", "Nguyen Admin", 1993, "HP");
const user = new User("001", "Nguyen Admin", 1999, "user", "DN");

const admin_2 = new User("001", "Nguyen Admin", 1993, "admin", "QN");

console.log("check tuổi admin", admin_1.getAge);
console.log("check tuổi user", user.getAge);
