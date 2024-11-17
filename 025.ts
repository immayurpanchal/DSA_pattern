/*

ABCDE
ABCD
ABC
AB
A
AB
ABC
ABCD
ABCDE

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");

  // Descending Pattern
  for(let row = n ; row >=1 ; row--){
    let str = "";

    // print values
    for(let col = 65; col <= 65 + row - 1; col++){
      str += String.fromCharCode(col);
    }

    console.log(str);
  }

  // Ascending Pattern
  for(let row = 2; row <= n; row++){
    let str = "";

    // print values
    for(let col = 65; col <= 65 + row - 1; col++){
      str += String.fromCharCode(col);
    }

    console.log(str);
  }
}

main();