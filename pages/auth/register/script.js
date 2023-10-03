import LoginEvent from "./login.event";
import RegisterEvent from "./register.event";

const formElement = document.querySelector("form");

formElement.addEventListener("submit", () => {
  // Lấy data từ form

  const dataForm = {
    email: " ", // lấy từ form
    password: "", // lấy từ form
    repeatPassword: "",
    username: "",
  };

  const loginEvent = new RegisterEvent();

  loginEvent.onRegister(dataForm);
});
