class Car {
  private brand: string;
  private price: number;
  private name: string;
  private color: string;
  private category: string;
  constructor(
    brand: string,
    price: number,
    name: string,
    color: string,
    category: string
  ) {
    this.brand = brand;
    this.category = category;
    this.color = color;
    this.price = price;
    this.name = name;
  }
  get getName() {
    return this.name;
  }
  get getPrice() {
    return this.price;
  }
  get getBrand() {
    return this.brand;
  }
  get getColor() {
    return this.color;
  }
  get getCategory() {
    return this.category;
  }
  set setName(name: string) {
    this.name = name;
  }
  set setPrice(price: number) {
    this.price = price;
  }
  set setBrand(brand: string) {
    this.brand = brand;
  }
  set setColor(color: string) {
    this.color = color;
  }
  set setCategory(category: string) {
    this.category = category;
  }

  inputData() {
    const name = prompt("Nhập tên xe", this.name);
    const price = Number(prompt("Nhập tên giá", this.price.toString()));
    const color = prompt("Nhập tên màu");
    const brand = prompt("Nhập tên hãng");
    const category = prompt("Nhập tên loại");
    if (name) {
      this.setName = name;
    }
    if (price) {
      this.setPrice = price;
    }
    if (category) {
      this.setCategory = category;
    }
    if (color) {
      this.setColor = color;
    }
    if (brand) {
      this.setBrand = brand;
    }
  }

  get displayData() {
    return `Name: ${this.getName} Brand: ${this.getBrand} Price: ${this.getPrice} Color: ${this.getColor} Category: ${this.getCategory}`;
  }
}

class CarManager {
  private cars: Car[] = [];

  createCar() {
    const car = new Car("", 0, "", "", "");
    car.inputData();
    this.cars.push(car);
  }

  updateCar(index: number) {
    const car = this.cars[index];
    car.inputData();
    this.cars.splice(index, 1, car);
  }

  showAllCar() {
    this.cars.forEach((car) => {
      console.log(car.displayData);
    });
  }

  deleteCar(index: number) {
    this.cars.splice(index, 1);
  }
}
const myShowRoom = new CarManager();
function handleCar() {
  const selected = prompt("Nhập C/R/U/D để tạo, đọc, sửa hoặc xóa dữ liệu");

  switch (selected) {
    case "C":
      myShowRoom.createCar();
      break;
    case "R":
      myShowRoom.showAllCar();
      break;
    case "U":
      const index = Number(prompt("Nhập vào vị trí xe muốn sửa"));
      myShowRoom.updateCar(index);
      break;
    case "D":
      const i = Number(prompt("Nhập vào vị trí xe muốn xóa"));
      myShowRoom.deleteCar(i);
      break;

    default:
      alert("Vui lòng nhập CRUD");
      break;
  }
}
