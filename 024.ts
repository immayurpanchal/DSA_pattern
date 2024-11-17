/*

ABCDEF
 ABCDE
  ABCD
   ABC
    AB
     A
*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");

  for(let row = 1 ; row <= n; row++){
    let str = "";

    // spaces in the beginning 
    for(let col = 1; col <= row - 1; col++){
      str += " ";
    }

    // print values
    for(let col = 65, i = n - row + 1; i >= 1; i--, col++){
      str += String.fromCharCode(col);
    }

    console.log(str);
  }
}

main();