/*

0 123456789
1 1234 6789
2 123   789
3 12     89
4 1       9

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");
  // print first row 
  let str = "";
  for (let col = 1; col <= n * 2 - 1; col++) {
    str += `${col}`
  }

  console.log(str);

  for (let row = 1; row <= n; row++) {
    str = "";
    // print values 
    for (let col = 1; col <= n - row; col++) {
      str += `${col}`
    } // str = 1234
    // print spaces
    for (let col = 1; col <= row * 2 - 1; col++) {
      str += " ";
    } // str = 1234 
    // print values 
    for (let col = n + row; col <= n * 2 - 1; col++) {
      str += `${col}`
    }
    console.log(str)
  }
}

const main2 = async () => {
  const n = +await getUserInput("Enter the number: ");

  const firstRow = Array.from({ length: n * 2 - 1}, (_, index) => index + 1).join('');
  console.log(firstRow);

  for(let row = 1; row <= n; row++){
    const leftNumbers = Array.from({ length: n - row}, (_, index) => index + 1).join('')
    const middleSpace = " ".repeat(row * 2 - 1);
    const rightNumbers = Array.from({ length: n - row}, (_, index) => n + row + index).join('') 
    console.log(leftNumbers + middleSpace + rightNumbers);
  }
}

main2();