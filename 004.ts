/*

      *
    *   *
  *   *   *
*   *   *   *

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");
  // outer loop for # of rows 
  for(let row = 1; row <=n ; row++){
    let str = "";
    // inner loop to print spaces
    for(let col = 1; col <=n - row; col++){
      str += " ";
    }

    // inner loop to print "* " 
    for(let col = 1; col <= row; col++){
      str += "* ";
    }
    console.log(str);
  }
}

main();