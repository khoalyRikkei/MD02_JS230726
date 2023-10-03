import RegisterRepository from "./register.repository";

export default class RegisterService {
  register(data) {
    const registerRepository = new RegisterRepository();

    const user = registerRepository.getUserByEmail(data.email);

    if (!user) {
      registerRepository.createUser(data);
      return {
        status: "success",
        message: "Đăng ký thành công",
      };
    }
    return {
      status: "failure",
      message: "Email đã tồn tại!!!",
    };
  }
}
