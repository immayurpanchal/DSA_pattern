/*

      *
    * *
  * * *
* * * *

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");
  for(let row = 1; row <=n ; row++){
    let str = "";
    for(let col = 1; col <=n - row; col++){
      str += " ";
    }

    for(let col = 1; col <= row; col++){
      str += "*";
    }
    console.log(str);
  }
}

main();