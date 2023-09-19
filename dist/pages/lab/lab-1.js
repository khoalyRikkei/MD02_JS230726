"use strict";
class Circle {
    constructor(radius, color) {
        this.color = color;
        this.radius = radius;
        this.color = color;
    }
    getPerimeter() {
        return Number((this.radius * Math.PI).toFixed(2));
    }
    getArea() {
        return Number((Math.PI * this.radius * this.radius).toFixed(2));
    }
    get getInfo() {
        return {
            radius: this.radius,
            color: this.color,
            perimeter: this.getPerimeter(),
            area: this.getArea(),
        };
    }
    setInfo(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    drawCircle() {
        const div = document.createElement("div");
        div.style.width = this.radius + "px";
        div.style.height = this.radius + "px";
        div.style.borderRadius = "50%";
        div.style.backgroundColor = this.color;
        div.style.display = "flex";
        div.style.flexDirection = "column";
        div.style.justifyContent = "center";
        div.style.alignItems = "center";
        const content = `<p>Perimeter: ${this.getPerimeter()}</p><p>Area: ${this.getArea()}</p>`;
        div.innerHTML = content;
        document.body.append(div);
    }
}
const circle_1 = new Circle(300, "red");
circle_1.drawCircle();
function handleCreateCircle() {
    const radiusElement = document.querySelector("#radius");
    const colorElement = document.querySelector("#color");
    const radius = Number(radiusElement.value);
    const color = colorElement.value;
    const circle = new Circle(radius, color);
    circle.drawCircle();
}
