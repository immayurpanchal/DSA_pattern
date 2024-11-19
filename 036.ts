/*

  ********* 
  **** **** 
  ***   *** 
  **     ** 
  *       * 

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");

  // print first row 
  let firstLine = "";
  for (let col = 0; col < n * 2 - 1; col++) {
    firstLine += "*";
  }

  console.log(firstLine);

  // print remaining 
  for (let row = 1; row < n; row++) {
    let str = "";

    // print values 
    for(let col = 0; col < n - row; col++){ // 5 - 0 = 5 
      str += "*";
    }

    // print spaces 
    for(let col = 0; col < row * 2 - 1; col++){ 
      str += " ";
    }

    // print values
    for(let col = 0; col < n - row ; col++){ 
        str += "*";
    }

    console.log(str)
  }
}

main();