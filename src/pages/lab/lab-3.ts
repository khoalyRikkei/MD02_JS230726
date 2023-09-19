class Fan {
  readonly SLOW = 1;
  readonly MEDIUM = 2;
  readonly FAST = 3;
  constructor(
    readonly color: string,
    readonly radius: number,
    private status: boolean = false,
    private speed: number = 1
  ) {
    this.status = status;
    this.speed = speed;
    this.color = color;
    this.radius = radius;
  }

  //   Phương thức

  get getSpeed(): string {
    switch (this.speed) {
      case this.FAST:
        return "fast";
      case this.MEDIUM:
        return "medium";
      default:
        return "slow";
    }
  }

  set setSpeed(speed: number) {
    this.speed = speed;
  }

  get getStatus(): string {
    return this.status ? "fan is on" : "fan is off";
  }
  set setStatus(status: boolean) {
    this.status = status;
  }

  get getInfo(): {
    stauts: string;
    radius: number;
    color: string;
    speed: string;
  } {
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
