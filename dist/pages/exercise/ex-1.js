"use strict";
class ShapeEx {
    constructor(_color) {
        this._color = _color;
        this._color = _color;
    }
    get getColor() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
}
class CircleEx extends ShapeEx {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    get getRadius() {
        return this.radius;
    }
    getArea() {
        return this.radius ** 2 * Math.PI;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    draw() {
        const div = document.createElement("div");
        div.style.width = this.radius + "px";
        div.style.height = this.radius + "px";
        div.style.borderRadius = "50%";
        div.style.backgroundColor = this.getColor;
        return div;
    }
}
class RetangleEx extends ShapeEx {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    get getWidth() {
        return this.width;
    }
    get getHeight() {
        return this.height;
    }
    draw() {
        const div = document.createElement("div");
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.background = this.getColor;
        return div;
    }
}
class Main {
    getArea(shape) {
        shape.getArea();
    }
}
function handleClick() {
    const selectedShape = prompt("Nhập vào hình cần vẽ: retangle - circle", "retangle");
    const newAction = new Main();
    if ("retangle" === selectedShape) {
        const width = Number(prompt("Nhập chiều dài hình chữ nhật"));
        const height = Number(prompt("Nhập chiều dài hình chữ nhật"));
        const color = prompt("Nhập màu sắc hình chữ nhật") || "";
        const retangle = new RetangleEx(color, width, height);
        newAction.getArea(retangle);
    }
    else if ("circle" === selectedShape) {
        const radius = Number(prompt("Nhập bán kính hình tròn"));
        const color = prompt("Nhập màu sắc hình tròn") || "";
        const circle = new CircleEx(color, radius);
        newAction.getArea(circle);
    }
    else {
        alert("Vui lòng nhập đúng");
    }
}
document.body.append("Hello");
function handlePlay(element) {
    console.log(11111);
    element.play();
}
function handlePause(element) {
    element.pause();
}
