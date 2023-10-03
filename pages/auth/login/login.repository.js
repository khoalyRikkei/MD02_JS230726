export default class LoginRepository {
  getUserByEmailPassword(email, password) {
    const accounts = getDataLocalStorage("accounts") ?? [];
    const user = accounts.find(
      (user) => user.email === email && user.password === password
    );
    return user;
  }
}
