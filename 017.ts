/*

5 4 3 2 1
5 4 3 2 
5 4 3
5 4
5

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");

  // Method 1
  /* for (let row = 1; row <=n; row++) {
    let str = "";

    for(let col = 1; col <= n - row + 1; col++){
      str += `${n - col + 1} `;
    }

    console.log(str);
  } */

  // Method 2
  for(let row = 1; row <= n; row++){
    let str = "";

    for(let col=1, printValue = n; col <= n - row + 1; col++, printValue--){
      str += `${printValue} `;
    }

    console.log(str)

  }
}

main();