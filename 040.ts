/*

 ABCDEFG
 ABC EFG
 AB   FG
 A     G

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");

  const firstRow = Array.from({ length: n * 2 - 1}, (_, index) => String.fromCharCode(65 + index)).join('');
  console.log(firstRow);

  for(let row = 1; row <= n; row++){
    const leftNumbers = Array.from({ length: n - row}, (_, index) => String.fromCharCode(65 + index)).join('')
    const middleSpace = " ".repeat(row * 2 - 1);
    const rightNumbers = Array.from({ length: n - row}, (_, index) => String.fromCharCode(65 + (n - row) + (row * 2 - 1) + index)).join('');
    console.log(leftNumbers + middleSpace + rightNumbers);
  }
}

main();