import LoginEvent from "./login.event.js";

const formElement = document.querySelector("form");

formElement.addEventListener("submit", (e) => {
  // Lấy data từ form
  e.preventDefault();
  const dataForm = {
    email: " ", // lấy từ form
    password: "", // lấy từ form
  };

  const loginEvent = new LoginEvent();

  loginEvent.onLogin(dataForm);
});
