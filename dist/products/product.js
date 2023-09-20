"use strict";
class Product {
    constructor(id, name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.id = id;
    }
    get info() {
        return {
            name: this.name,
            price: this.price,
            quantity: this.quantity,
            id: this.id,
        };
    }
    set setName(name) {
        this.name = name;
    }
    set setPrice(price) {
        this.price = price;
    }
    set setQuantity(quantity) {
        this.quantity = quantity;
    }
}
class Bakery {
    constructor() {
        this.productList = [];
    }
    createProduct(data) {
        let id = 1;
        if (this.productList.length > 0) {
            id = this.productList[this.productList.length - 1].id + 1;
        }
        const newProduct = new Product(id, data.name, data.price, data.quantity);
        this.productList.push(newProduct);
    }
    showAllProduct() {
        const products = this.productList.map((product) => product.info);
        return products;
    }
    deleteProduct(id) {
        const newList = this.productList.filter((product) => product.id !== id);
        this.productList = newList;
    }
    updateProduct(data) {
        if (data?.id) {
            const product = this.productList.find((product) => product.id == data.id);
            const index = this.productList.findIndex((product) => product.id == data.id);
            const newProduct = { ...product?.info, ...data };
            const productAdd = new Product(newProduct.id, newProduct.name, newProduct.price, newProduct.quantity);
            this.productList.splice(index, 1, productAdd);
        }
    }
    buyProduct(id) {
        const product = this.productList.find((prduct) => prduct.id == id);
        if (product === undefined) {
            alert("Sản phẩm không tồn tại");
            return;
        }
        if (product.info.quantity > 0) {
            product.setQuantity = product.info.quantity - 1;
            console.log(11111, this.showAllProduct());
            const newProduct = new Product(product.info.id, product.info.name, product.info.price, 1);
            return newProduct;
        }
        else {
            alert("Sản phẩm hết hàng");
        }
    }
}
const store = new Bakery();
store.createProduct({ name: "Bánh mì", price: 20000, quantity: 50 });
store.createProduct({ name: "Bánh bao", price: 15000, quantity: 0 });
store.createProduct({ name: "Bánh trung thu", price: 150000, quantity: 200 });
store.updateProduct({ id: 3, price: 80000 });
store.deleteProduct(1);
console.log(store.showAllProduct());
const store_2 = new Bakery();
class MyCart {
    constructor() {
        this.myCart = [];
    }
    buyProduct(id) {
        const product = store.buyProduct(id);
        if (!product) {
            return;
        }
        const productCart = this.myCart.find((productInCart) => productInCart.id === product.id);
        if (productCart) {
            productCart.setQuantity = productCart.info.quantity + 1;
        }
        else {
            this.myCart.push(product);
        }
    }
    showAllCart() {
        const products = this.myCart.map((product) => product.info);
        return products;
    }
}
const user_1 = new MyCart();
user_1.buyProduct(3);
user_1.buyProduct(3);
console.log(user_1.showAllCart());
