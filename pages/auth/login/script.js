import LoginEvent from "./login.event";

const formElement = document.querySelector("form");

formElement.addEventListener("submit", () => {
  // Lấy data từ form

  const dataForm = {
    email: " ", // lấy từ form
    password: "" // lấy từ form
  };

  const loginEvent = new LoginEvent();

  loginEvent.onLogin(dataForm);
});
