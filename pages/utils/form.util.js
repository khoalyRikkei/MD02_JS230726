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

    if (user) {
      return user;
    }
  }

  renderValidateForm() {
    
  }
}
