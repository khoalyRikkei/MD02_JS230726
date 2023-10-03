export class FormUtil {
  getDataForm(idForm, className) {
    const inputElements = document.querySelectorAll(
      `#${idForm}  .${className} input`
    );
    let user = {};

    inputElements.forEach((input) => {
      if (input.name) {
        const { name, value } = input;
        user[name] = value;
      }
    });

    return user;
  }

  renderValidateForm() {}
  togglePassword(element) {

    const inputElement = element.querySelector("input")
    if(inputElement.type == "password") {
      inputElement.type = "text"
    } else {
      inputElement.type = "password"

    }

  }
}
