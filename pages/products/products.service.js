


export class ProductService {


  getHTMLProducts() {
    const products = []; // Get list product from repository
    const html = ""; // Create html from products
    return {
      status: "susscessed",
      message: "Get product sucessful.",
      result: { html },
    };
  }
}
