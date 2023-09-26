// Bài 1: Sắp xếp dữ liệu asc desc

function sortData<T>(arr: T[], action: "asc" | "desc"): T[] {
  //   arr.sort();
  if (action === "asc") {
    return arr.sort((a, b) => (a > b ? 1 : -1));
  } else {
    return arr.sort((a, b) => (a > b ? -1 : 1));
  }
  //   return arr;
}

console.log(sortData([1, 2, 4, 5, 10], "desc"));

sortData<number>([1, 2, 4, 5, 10], "asc");
console.log(sortData(["a", "b", "d", "abc"], "desc"));

sortData<string>(["a", "b", "d"], "asc");

// Bài 2: Thêm dữ liệu vào mảng

function addData<T>(target: T[], data: T) {
  target.push(data);
  return target;
}

// const arr: (number | string)[] = [1, 2, 4, "str"];

const arr = [1, 2, 4]; // arr:number[] --> tự định nghĩa

const arr_2 = [1, 2, 4, "string"]; // arr: (number | string)[]
arr_2.push("string");

const arr_3: Array<number> = [1];
addData([1, 2, 4, 5], 2);
addData(["5"], "dd");

// Bài 4. Kiểm tra dữ liệu có trong mảng hay không

function checkContainer<T>(value: T, data: T[]) {
  return data.includes(value);
}

console.log(
  "Kiểm tra giá trị có trong mảng hay không:",
  checkContainer("a", ["a", "b", "c"])
);

console.log(
  "Kiểm tra giá trị có trong mảng hay không 2:",
  checkContainer(1, [2, 3, 4])
);

// Bài 5: Tìm giá trị lớn nhất trong mảng

function findMax<T>(data: T[]): T {
  let max: T = data[0];
  data.forEach((item) => {
    if (item > max) {
      max = item;
    }
  });
  return max;
}

// Bài 3: Duyệt qua các phần tử trong object

function readObject<T>(object: T) {
  for (const key in object) {
    // object.address = "hello"
    console.log(key + " có giá trị là: " + object[key]);
  }
}

readObject<object>({ name: "Nguyễn Văn A", age: 20 });
