/*

0 1234321
1 123 321
2 12   21
3 1     1

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");

  const firstRow = Array.from({ length: n * 2 - 1}, (_, index) => index + 1).join('');
  console.log(firstRow);

  for(let row = 1; row <= n; row++){
    const leftNumbers = Array.from({ length: n - row}, (_, index) => index + 1).join('')
    const middleSpace = " ".repeat(row * 2 - 1);
    const rightNumbers = Array.from({ length: n - row}, (_, index) => n - row - index).join('')
    console.log(leftNumbers + middleSpace + rightNumbers);
  }
}

main();