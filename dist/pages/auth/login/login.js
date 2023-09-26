import { onLogin } from "./login.event";
const btnSubmit = document.querySelector("#btn-login");
btnSubmit.addEventListener("click", onLogin);
