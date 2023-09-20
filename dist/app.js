"use strict";
class Person {
    constructor(name, yoB) {
        this.name = name;
        this.yoB = yoB;
    }
    get getAge() {
        const year = Number(new Date().getFullYear());
        return year - this.yoB;
    }
}
class User extends Person {
    constructor(id, name, yoB, role, address) {
        super(name, yoB);
        this.gender = true;
        this.id = id;
        this.role = role;
    }
    set setRole(role) {
        this.role = role;
    }
}
class Admin extends User {
    constructor(id, name, yoB, address) {
        super(id, name, yoB, "admin", "DN");
    }
}
const admin_1 = new Admin("001", "Nguyen Admin", 1993, "HP");
const user = new User("001", "Nguyen Admin", 1999, "user", "DN");
const admin_2 = new User("001", "Nguyen Admin", 1993, "admin", "QN");
console.log("check tuổi admin", admin_1.getAge);
console.log("check tuổi user", user.getAge);
