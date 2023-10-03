import { setDataLocalStorage } from "../../../utils/method";
import LoginRepository from "./login.repository";

const loginRepository = new LoginRepository();

export default class LoginService {
  login(user) {
    const user = loginRepository.getUserByEmailPassword(
      user.emai,
      user.password
    );

    if (user) {
      delete user.password;
      setDataLocalStorage("userLogin", user);

      return {
        status: "success",
        data: user,
        message: "Login thanh cong",
      };
    }

    return {
      status: "failure",
      data: null,
      message: "Email hoặc mật khẩu không đúng",
    };
  }

  toggleTypePassword() {
    
  }
}
