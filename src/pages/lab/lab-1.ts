class Circle {
  public radius: number;
  constructor(radius: number, public color: string) {
    this.radius = radius;
    this.color = color;
  }

  getPerimeter(): number {
    return Number((this.radius * Math.PI).toFixed(2));
  }
  getArea(): number {
    return Number((Math.PI * this.radius * this.radius).toFixed(2));
  }
  get getInfo(): {
    radius: number;
    color: string;
    perimeter: number;
    area: number;
  } {
    return {
      radius: this.radius,
      color: this.color,
      perimeter: this.getPerimeter(),
      area: this.getArea(),
    };
  }
  setInfo(radius: number, color: string) {
    this.radius = radius;
    this.color = color;
  }

  drawCircle(): void {
    const div = document.createElement("div");
    div.style.width = this.radius + "px";
    div.style.height = this.radius + "px";
    div.style.borderRadius = "50%";
    div.style.backgroundColor = this.color;
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";

    // Thêm chức năng kích thước

    const content = `<p>Perimeter: ${this.getPerimeter()}</p><p>Area: ${this.getArea()}</p>`;

    div.innerHTML = content;
    document.body.append(div);
  }
}

const circle_1 = new Circle(300, "red");
circle_1.drawCircle();

// Tiến hành bắt sự kiện tạo hình tròn

function handleCreateCircle() {
  const radiusElement = document.querySelector("#radius") as HTMLInputElement;
  const colorElement = document.querySelector("#color") as HTMLInputElement;
  const radius = Number(radiusElement.value);
  const color = colorElement.value;
  const circle = new Circle(radius, color);
  circle.drawCircle();
}
