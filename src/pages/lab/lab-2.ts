class QuadraticEquation {
  // Thuộc tính
  //   private a: number;
  private b: number;
  private c: number;

  //   hàm tạo
  constructor(private a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  //   Phương thức

  get getDiscriminant() {
    return this.b ** 2 - 4 * this.a * this.c;
  }

  get getRoot1(): number {
    const delta = this.getDiscriminant;

    if (delta >= 0) {
      return (-this.b + Math.sqrt(delta)) / (2 * this.a);
    }

    return 0;
  }

  get getRoot2(): number {
    const delta = this.getDiscriminant;
    if (delta >= 0) {
      return (-this.b - Math.sqrt(delta)) / (2 * this.a);
    }
    return 0;
  }

  get calculation(): string {
    const delta = this.getDiscriminant;
    if (delta > 0) {
      return `Phương trình đã cho có 2 nghiệm x1 = ${this.getRoot1} và x2 = ${this.getRoot2}`;
    } else if (delta === 0) {
      return `Phương trình có nghiệm kép x1 = x2 =  ${this.getRoot1}`;
    } else {
      return `Phương trình vô nghiệm`;
    }
  }
}

const test_1 = new QuadraticEquation(1, -10, -1);

console.log(11, test_1.calculation);
