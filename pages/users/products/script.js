import ProductEvent from "./products.event";

const productEvent = new ProductEvent();



window.addEventListener("load", () => {
  productEvent.onLoadProduct();
});
