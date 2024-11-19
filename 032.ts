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

  // Ascending Pattern
  for (let row = 1; row <= n; row++) {
    let str = "";

    // print spaces in the beginning
    for (let col = 1; col <= n - row; col++) {
      str += " ";
    }

    // print values
    for (let col = 1; col <= row * 2 - 1; col++) {
      str += `${row}`;
    }

    console.log(str)
  }

  // Desending Pattern 
  for (let row = n - 1; row >= 1; row--) {
    let str = "";

    // print spaces in the beginning 
    for (let col = 1; col <= n - row; col++) {
      str += " ";
    }

    // print values 
    for (let col = 1; col <= row * 2 - 1; col++) {
      str += `${row}`;
    }

    console.log(str)

  }
}

main();