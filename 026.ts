/*

   A
  ABC
 ABCDE
ABCDEFG

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");

  for(let row = 1; row <= n; row++){
    let str = "";

    // print spaces in the beginning
    for(let col = 1; col <= n - row; col++ ){
      str += " ";
    }

    // print values
    for(let col = 65; col < 65 + (row * 2 - 1); col++){
      str += String.fromCharCode(col);
    }

    console.log(str)
  }
}

main();