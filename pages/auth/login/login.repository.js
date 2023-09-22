// File chỉ xử lý lấy dữ liệu về

import { getDataLocalStorage } from "../../../utils/method.js";

export class LoginRepository {
  getUserByEmailAndPassword(email, password) {
    const accounts = getDataLocalStorage("accounts") || [];

    // const user = accounts.find()
    let user;
    for (const userDB of accounts) {
      if (userDB.email === email) {
        if (userDB.password === password) {
          user = { ...userDB };
          delete userDB.password;
          break;
        }
      }
    }
    if (user) {
      return {
        status: "susscessed",
        message: "Login sucessful.",
        result: { ...user },
      };
    }

    //localStorage.getItem('users'). --> trả về null hoặc 1 object chứa user

    return {
      status: "failed",
      message: "Login error.",
      result: null,
    };
  }
  
}
