import { setDataLocalStorage } from "../../../utils/method.js";
import { FormUtil } from "../../utils/formAuth.util.js";
import LoginRepository from "./login.repository.js";

const loginRepository = new LoginRepository();

export default class LoginService {
  login(user) {
    const formUtil = new FormUtil();
    formUtil.renderValidateForm("form-login", "input-group", {
      email: "email trùng lặp",
      password: "password sai!",
    });

    // Cần kiểm tra database
    // const user = loginRepository.getUserByEmailPassword(
    //   user.emai,
    //   user.password
    // );

    // if (user) {
    //   delete user.password;
    //   setDataLocalStorage("userLogin", user);

    //   return {
    //     status: "success",
    //     data: user,
    //     message: "Login thanh cong",
    //   };
    // }

    return {
      status: "failure",
      data: null,
      message: "Email hoặc mật khẩu không đúng",
    };
  }
}
