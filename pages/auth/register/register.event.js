import { RegisterService } from "./register.service";

const btnRegister = document.querySelector("#btn-register");

btnRegister.addEventListener("click", () => {
  // B1: Lấy dữ liệu từ form

  const user = {
    emaill: "",
    password: "",
    repeaptPassword: "",
  };

  // Bước 2: Lấy dữ liệu từ localStorage và kiểm tra ---> backend --> trả  về kết quả

  //   --> nhường cho service --> cung cấp user --> nhận thông tin

  const registerServiecr = new RegisterService();

  const response = registerServiecr.register(user) // nhiệm vụ của

  //   const response = {
  //     status: "",
  //     data: "",
  //     message: "",
  //   };

  // Bước 3: Nhận kết quả và thực hiện ......

  if ("") {
    // nếu đăng ký thành công --> điều hướng login
  } else {
    // Thông  báo lỗi
  }
});
