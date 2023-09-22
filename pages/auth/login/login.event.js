import { LoginService } from "./login.service.js";
import { MessageUtil } from "../../utils/message.util.js";
import { FormUtil } from "../../utils/form.util.js";

// file event --> chỉ xử lý các event

// event submit login
window.onLogin = function () {
  // login

  // B1: lấy được email, password từ form

  const formUtil = new FormUtil();
  const userModel = formUtil.getDataForm("form-auth", "input-group"); // lấy được user

  console.log(userModel, 111111);

  //  // Bước 2: Validate, Bước 3: So sánh dữ liệu ở localStorage --> server --> trả kết quả xử lý cho login
  const loginService = new LoginService();
  const messageUtil = new MessageUtil();

  // B4: Dựa vào kết quả mà hành động
  const ret = loginService.login(userModel);
  if (ret.status === "successed")
    messageUtil.showSuccessMessage(ret.message); // redirect to x page
  else messageUtil.showErrorMessage(ret.message);
};
// console.log(window);

// console.log();

// document.getElementById("btn-login").addEventListener("mouseover", () => {
//   console.log(111111111111111);
// });
