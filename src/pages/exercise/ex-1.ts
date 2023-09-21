abstract class ShapeEx {
  constructor(private _color: string) {
    this._color = _color;
  }

  get getColor(): string {
    return this._color;
  }
  set color(value: string) {
    this._color = value;
  }
  abstract getArea(): number;
  abstract getPerimeter(): number;
  abstract draw(): HTMLElement;
}

class CircleEx extends ShapeEx {
  private radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  get getRadius() {
    return this.radius;
  }

  getArea(): number {
    return this.radius ** 2 * Math.PI;
  }
  getPerimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  draw(): HTMLElement {
    const div = document.createElement("div");
    div.style.width = this.radius + "px";
    div.style.height = this.radius + "px";
    div.style.borderRadius = "50%";
    div.style.backgroundColor = this.getColor;
    return div;
  }
}

class RetangleEx extends ShapeEx {
  private width: number;
  private height: number;

  constructor(color: string, width: number, height: number) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
  getPerimeter(): number {
    return 2 * (this.width + this.height);
  }

  get getWidth() {
    return this.width;
  }
  get getHeight() {
    return this.height;
  }

  draw(): HTMLElement {
    const div = document.createElement("div");
    div.style.width = this.width + "px";
    div.style.height = this.height + "px";
    div.style.background = this.getColor;
    return div;
  }
}

class Main {
  //   getShape() {
  //     const selectedShape = prompt(
  //       "Nhập vào hình cần vẽ: retangle - circle",
  //       "retangle"
  //     );

  //     if ("retangle" === selectedShape) {
  //       const width = Number(prompt("Nhập chiều dài hình chữ nhật"));
  //       const height = Number(prompt("Nhập chiều dài hình chữ nhật"));
  //       const color = prompt("Nhập màu sắc hình chữ nhật") || "";
  //       const retangle = new RetangleEx(color, width, height);
  //       document.body.append(retangle.draw());
  //     } else if ("circle" === selectedShape) {
  //       const radius = Number(prompt("Nhập bán kính hình tròn"));
  //       const color = prompt("Nhập màu sắc hình tròn") || "";
  //       const circle = new CircleEx(color, radius);

  //       document.body.appendChild(circle.draw());
  //     } else {
  //       alert("Vui lòng nhập đúng");
  //     }
  //   }
  getArea(shape: ShapeEx): void {
    shape.getArea();
  }
}

function handleClick(): void {
  const selectedShape = prompt(
    "Nhập vào hình cần vẽ: retangle - circle",
    "retangle"
  );

  const newAction = new Main();
  if ("retangle" === selectedShape) {
    const width = Number(prompt("Nhập chiều dài hình chữ nhật"));
    const height = Number(prompt("Nhập chiều dài hình chữ nhật"));
    const color = prompt("Nhập màu sắc hình chữ nhật") || "";
    const retangle = new RetangleEx(color, width, height);

    newAction.getArea(retangle);
  } else if ("circle" === selectedShape) {
    const radius = Number(prompt("Nhập bán kính hình tròn"));
    const color = prompt("Nhập màu sắc hình tròn") || "";
    const circle = new CircleEx(color, radius);

    newAction.getArea(circle);
  } else {
    alert("Vui lòng nhập đúng");
  }
  //   newAction.getShape();
}

document.body.append("Hello");

function handlePlay(element: HTMLAudioElement) {
  console.log(11111);

  element.play();
}
function handlePause(element: HTMLAudioElement) {
  element.pause();
}
