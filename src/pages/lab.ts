function findArr(arr: number[]): void {
  let iStartArr = 0;
  let arr_start_i = 0;
  let arr_current_i = 0;
  let arr_end_i = 0;

  let max = arr[0];

  for (let index = 1; index < arr.length; index++) {
    const number = arr[index];
    if (max + number < number) {
      arr_current_i = index;
      max = number;
    } else {
      max += number;
    }
  }
}

// max -2/ sum 0
// sum 8 / max 8
// sum 5/ max 8
// sum 9/ max 9
//sum 8/ max 9
// sum 10 / 10
//sum 11 / max 11
//  sum 6 max 11
// sum 10 / max 11

findArr([-2, 10, -3, 4, -1, 2, 1, -5, 4]);
