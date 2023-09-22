import { setDataLocalStorage } from "../../../utils/method.js";
import { LoginRepository } from "./login.repository.js";

// Xử lý logic vấn đề, nên trả về một data --> trường hợp void --> cũng nên trả về null
export class LoginService {
  login(userModel) {
    console.log("hello!! this is login logic.");
    // Xử lí validate

    // Kiểm tra trên localStorage
    const loginRepository = new LoginRepository();
    const response = loginRepository.getUserByEmailAndPassword(
      userModel.email,
      userModel.password
    );

    if (response.result) {
      setDataLocalStorage("userLogin", response.result);
    }

    return response;
  }
}

export function login(userModel) {
  console.log("hello!! this is login logic.");
  // Xử lí validate

  // Kiểm tra trên localStorage
  const loginRepository = new LoginRepository();
  const response = loginRepository.getUserByEmailAndPassword(
    userModel.email,
    userModel.password
  );

  return response;
}
