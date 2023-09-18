function handle_bai_2(): void {
  const str: string = prompt("Nhập chuỗi") || "/";

  const checkData = isValid(str);
  if (checkData) {
    console.log("Ký tự hợp lệ");
  } else {
    console.log("Ký tự không hợp lệ");
  }
}

function isValid(data: string): boolean {
  const dataCheck: { [key: string]: string } = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const stack = [];
  console.log(1111, data);

  for (let index = 0; index < data.length; index++) {
    const key = data[index];
    const value = dataCheck[key];

    if (value) {
      // Kiểm tra xem có key bằng giá trị của data thứ i hay không -->
      stack.push(value);
    } else {
      // Nếu không có char --> dữ liệu không là những trường hợp dấu mở --> nó là dấu đóng
      if (data[index] !== stack.pop()) {
        // Kiểm tra xem dấu đóng đó có phải là dấu đóng cuối cùng hay không --> nếu không phải --> false
        return false;
      }
    }
  }

  //   []{
  return stack.length === 0;
}
