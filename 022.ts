/*
Pascal Triangle
   1 2 3 4 5
1      1
2     1 1
3    1 2 1
4   1 3 3 1
5  1 4 6 4 1

row = 5 
col = 3 
value = ?? // Ans: 6
*/
import { getUserInput } from '.';

// !NOTE: Pascal triangle follows the Binomial Formula r-1Cn-1
/*
row = 5, col = 3 means 
row - 1 and col - 1 
5 - 1 and 3 -1 
4 C 2 
4 * 3 / 1 * 2 
Ans : 6 
*/
const getPascalValue = (row: number, col: number) => {
  // row = 5, col = 3, = 4*3 /1*2 = 10
  // 4C2 = 4! / 2! * (4-2)!
  // 4! / 2! * (2)! 
  // 4 * 3 / 2 * 1 
  // 2 * 3 
  // Ans: 6 
  // 4 

  let ans = 1;
  for(let i = row - 1, j = 1; i >= col; i--, j++){ 
    ans *= i;
    ans /= j;
  }
  return ans;
}

const main = async () => {
  const n = +await getUserInput("Enter the number: ");

  for(let row = 1; row <= n; row++){
    let str = "";

    // print spaces in the beginning
    for(let col = 1; col <= n - row; col++){
      str += " ";
    }

    // print the value
    for(let col = 1; col <= row; col++){
      str += getPascalValue(row, col) + " ";
    }

    console.log(str); 
  }
}

main();