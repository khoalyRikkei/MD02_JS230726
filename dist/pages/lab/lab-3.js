"use strict";
function handle_lab_3() {
    const str = prompt("Nhập vào chuỗi số cần kiểm tra") || "";
    const stringToLowerCase = str.toLowerCase();
    let newString = "";
    for (const char of str) {
        if (/[a-z0-9]/.test(char)) {
            newString += char;
        }
    }
    const isPalindrome = checkPalindrome(newString);
    isPalindrome
        ? console.log("/" + str + "/ là một chuỗi Palindrome ")
        : console.log("/" + str + "/ không phải là một chuỗi Palindrome ");
}
function checkPalindrome(str) {
    for (let index = 0; index < str.length / 2; index++) {
        if (str[index] !== str[str.length - index - 1]) {
            return false;
        }
    }
    return true;
}
