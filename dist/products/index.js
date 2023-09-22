"use strict";
class Product {
    constructor(product) {
        this.id = product.id;
        this.name = product.name;
        this.image = product.image;
        this.quantity = product.quantity;
        this.price = product.price;
    }
}
const product = new Product({
    name: "sp1",
    id: 1,
    price: 2,
    image: "",
    quantity: 10,
});
console.log(product);
