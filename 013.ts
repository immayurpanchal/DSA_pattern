/*

1
1 1
1 1 1
1 1 1 1
1 1 1 1 1

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");
  const VALUE_TO_PRINT = 1;

  for(let row = 1; row <= n ; row++){
    let str = "";

    for(let col = 1; col <= row; col++){
      str += VALUE_TO_PRINT + " ";
    }

    console.log(str);
  }
}

main();