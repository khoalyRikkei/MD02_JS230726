"use strict";
class Fan {
    constructor(color, radius, status = false, speed = 1) {
        this.color = color;
        this.radius = radius;
        this.status = status;
        this.speed = speed;
        this.SLOW = 1;
        this.MEDIUM = 2;
        this.FAST = 3;
        this.status = status;
        this.speed = speed;
        this.color = color;
        this.radius = radius;
    }
    get getSpeed() {
        switch (this.speed) {
            case this.FAST:
                return "fast";
            case this.MEDIUM:
                return "medium";
            default:
                return "slow";
        }
    }
    set setSpeed(speed) {
        this.speed = speed;
    }
    get getStatus() {
        return this.status ? "fan is on" : "fan is off";
    }
    set setStatus(status) {
        this.status = status;
    }
    get getInfo() {
        return {
            stauts: this.getStatus,
            radius: this.radius,
            color: this.color,
            speed: this.getSpeed,
        };
    }
}
const fan_1 = new Fan("yellow", 10, true, 3);
const fan_2 = new Fan("blue", 10);
console.log("Thông tin của quạt", fan_1.getInfo);
console.log("Thông tin của quạt 2", fan_2.getInfo);
