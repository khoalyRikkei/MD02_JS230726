import { FormUtil } from "../../utils/form.util";
import RegisterService from "./register.service";

export default class RegisterEvent {
  onRegister(dataForm) {
    // B1: gọi service ==> response

    const registerService = new RegisterService();

    const response = registerService.register(dataForm)

    if (response.status == "success") {
      navigation("/login");
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
