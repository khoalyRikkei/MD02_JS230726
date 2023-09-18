// input
// --> Chuỗi
// --> in thường

// --> chỉ giữ chữ và số
// --> Kiểm tra chuổi đã chuyển đổi

function handle_lab_3(): void {
  const str: string = prompt("Nhập vào chuỗi số cần kiểm tra") || "";

  const stringToLowerCase = str.toLowerCase();

  let newString: string = "";

  for (const char of str) {
    if (/[a-z0-9]/.test(char)) {
      // check chữ hoặc số để tạo string mới
      newString += char;
    }
  }
  const isPalindrome = checkPalindrome(newString);
  isPalindrome
    ? console.log("/" + str + "/ là một chuỗi Palindrome ")
    : console.log("/" + str + "/ không phải là một chuỗi Palindrome ");
}

function checkPalindrome(str: string): boolean {
  for (let index = 0; index < str.length / 2; index++) {
    if (str[index] !== str[str.length - index - 1]) {
      return false;
    }
  }
  return true;
}
