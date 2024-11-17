/*

A
A B 
A B C 
A B C D 

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");

  for(let row = 1 ; row <= n; row++){
    let str = "";

    for(let col = 65; col <= 65 + row - 1; col++){
      str += String.fromCharCode(col) + " ";
    }
    console.log(str);
  }
}

main();