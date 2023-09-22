import { RenderUtil, _ADD_DATA } from "../utils/render.util";
import { ProductService } from "./products.service";

import Parent from  "../utils/render.util"



window.onLoadProducts = function () {
  const productService = new ProductService();
  const messageUtil = new MessageUtil();
  const render = new RenderUtil();

  //   lấy được email, password từ form

  const productModel = {
    category: _ADD_DATA,
  };
  const ret = productService.getHTMLProducts(productModel);
  if (ret.status === "successed") {
    const element = document.getElementById("products");
    render.renderByHTML(ret.result.html, element);
    messageUtil.showSuccessMessage(ret.message); // redirect to x page
  } else messageUtil.showErrorMessage(ret.message);
};
