import {
  getDataLocalStorage,
  setDataLocalStorage,
} from "../../../utils/method";

export default class RegisterRepository {
  getUserByEmail(email) {
    const accounts = getDataLocalStorage("accounts") ?? [];
    return accounts.find((user) => user.email === email);
  }



  createUser(user) {
    const accounts = getDataLocalStorage("accounts") ?? [];
    accounts.push(user);
    setDataLocalStorage("accounts", accounts);
    return accounts.find((user) => user.email === email);
  }
}
