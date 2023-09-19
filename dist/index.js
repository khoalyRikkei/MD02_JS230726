"use strict";
const user = {
    name: "Nguyễn Văn A",
};
console.log(11, user);
class Person {
    constructor(name, age, id, gender) {
        this.name = name;
        this.id = id;
        this.family = [];
        this.name = name;
        this.age = age;
        this.id = id;
        this.gender = gender;
    }
    getID() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getGender() {
        return this.gender;
    }
    setGender(gender) {
        this.gender = gender;
    }
    addMember(member) {
        this.family.push(member);
    }
    getFamily() {
        return this.family;
    }
}
const user_1 = new Person("Nguyễn Văn B", 20, "2903F", true);
const user_2 = new Person("Nguyễn Văn C", 21, "2903FFF", true);
console.log("check user", user_1);
user_1.name = "Nguyễn Văn C";
console.log("check user name", user_1.name);
console.log("check user gender", user_1.getGender());
console.log("check user id", user_1.id);
user_1.setGender(false);
console.log("check gender 2", user_1.getGender());
user_1.addMember(user_2);
console.log("member", user_1.getFamily());
