import { FormUtil } from "../../utils/form.util";
import LoginService from "./login.service";

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
