import { FormUtil } from "../../utils/formAuth.util.js";
import LoginService from "./login.service.js";

const loginService = new LoginService();

export default class LoginEvent {
  onLogin(user) {
    // gửi cho service
    const response = loginService.login(user);

    if (response.status === "success") {
      navigation("/");
    } else {
      alert(response.message);
    }
  }

  onTogglePassword(element) {
    // Đổi type password
    const formUtil = new FormUtil();

    formUtil.togglePassword(element);
  }
}
