const user = {
  name: "Nguyễn Văn A",
};
console.log(11, user);

// 1. Khởi tạo một class và instance

class Person {
  public age: number;
  private gender: boolean;
  private family: Person[] = [];

  //   Khai báo được những thuộc tính của 1 người
  constructor(
    public name: string,
    age: number,
    readonly id: string,
    gender: boolean
  ) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.gender = gender;
    // this.family.push(new Person(name, age, id, gender));
  }

  //   Phương thức của Person
  getID(): string {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
  getGender(): boolean {
    return this.gender;
  }
  setGender(gender: boolean) {
    this.gender = gender;
  }
  //   setID(id):void{
  // this.id = id
  //   }
  addMember(member: Person): void {
    this.family.push(member);
  }
  getFamily(): Person[] {
    return this.family;
  }
}

const user_1 = new Person("Nguyễn Văn B", 20, "2903F", true);
const user_2 = new Person("Nguyễn Văn C", 21, "2903FFF", true);

console.log("check user", user_1);
user_1.name = "Nguyễn Văn C";
console.log("check user name", user_1.name); // có thể truy vấn trực tiếp và gán trực tiếp
console.log("check user gender", user_1.getGender());
console.log("check user id", user_1.id);

// gán giá trị cho private
user_1.setGender(false);
console.log("check gender 2", user_1.getGender());
user_1.addMember(user_2);

console.log("member", user_1.getFamily());
