/*

      *
    *   *
  *   *   *
*   *   *   *
*   *   *   *
  *   *   *
    *   *
      *

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");
  // Below code prints the Ascending pattern
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
  // Below code prints the Descending pattern
  for(let row = n; row >= 1; row--){
    let str = "";

    // inner loop to print spaces
    for(let col = 1; col <= n - row; col++){ 
      str += " ";
    }

    // inner loop to print "* "
    for(let col = row; col >=1 ; col--){
      str += "* ";
    }

    console.log(str)
  }
}

main();