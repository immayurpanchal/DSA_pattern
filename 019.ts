/*

1
1 2 
1 2 3 
1 2 3 4

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");

  for(let row = 1; row <= n; row++){
    let str = "";

    for(let col =1; col <= row; col++){
      str += `${col} `;
    }

    console.log(str);
  }
}

main();