function countChar(str: string): { [key: string]: number } {
  const result: { [key: string]: number } = {};

  for (let index = 0; index < str.length; index++) {
    const key: string = str[index];

    if (result[key]) {
      result[key]++;
    } else {
      result[key] = 1;
    }
  }
  return result;
}

console.log(countChar("hello world 22 A B E * ///"));
