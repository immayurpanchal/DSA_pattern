/*

    1
   222
  33333
 4444444
  33333
   222
    1

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");
  // Below code prints the Ascending pattern
  // outer loop for # of rows 
  for (let row = 1; row <= n; row++) {
    let str = "";
    // inner loop to print spaces
    for (let col = 1; col <= n - row; col++) {
      str += " ";
    }

    // inner loop to print "${row} " 
    for (let col = 1; col <= row * 2 - 1; col++) {
      str += `${row}`;
    }
    console.log(str);

  }
  // Below code prints the Descending pattern
  for (let row = n - 1; row >= 1; row--) {
    let str = "";

    // inner loop to print spaces
    for (let col = 1; col <= n - row; col++) {
      str += " ";
    }

    // inner loop to print "${row} " 
    for (let col = 1; col <= row * 2 - 1; col++) {
      str += `${row}`;
    }

    console.log(str)
  }
}

main();