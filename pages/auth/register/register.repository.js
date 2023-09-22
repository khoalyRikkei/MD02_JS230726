import { getDataLocalStorage } from "../../../utils/method";

export class RegisterRepository {
  registerUser(email, password) {
    const accounts = getDataLocalStorage("accounts");

    for (const user of accounts) {
      if (user.email === email) {
        return {
          status: "fail",
          data: null,
          message: "Tài khoản đã tồn tại",
        };
      }
    }

    return {
      status: "success",
      data: null,
      message: "Đăng ký thành công",
    };

    // Kiểm tra thông tin và trả về kết quả
  }
}
