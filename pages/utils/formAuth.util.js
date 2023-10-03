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

  renderValidateForm(idForm, className, error) {
    console.log(111111111111);
    const inputGroupElements = document.querySelectorAll(
      `#${idForm}  .${className} `
    );

    console.log(22, inputGroupElements);
    inputGroupElements.forEach((element) => {
      const input = element.querySelector("input");
      console.log(4444, element);
      if (input.name) {
        const p = element.querySelector("p");
        if (p && p.className === "error") {
          p.textContent = error[input.name];
          return;
        } else {
          const p = document.createElement("p");
          p.style.color = "red";
          p.classList.add("error");
          p.textContent = error[input.name];
          element.appendChild(p);
        }
      }
    });
  }
  togglePassword(element) {
    const inputElement = element.querySelector("input");
    if (inputElement.type == "password") {
      inputElement.type = "text";
    } else {
      inputElement.type = "password";
    }
  }
}
