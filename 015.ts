/*

    1
   212
  32123
 4321234
  32123
   212
    1

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");

  // Ascending Pattern
  for (let row = 1; row <= n; row++) {
    let str = "";

    // print spaces in the beginning 
    for (let col = 1; col <= n - row; col++) {
      str += " ";
    }

    // print first half values
    for (let col = row; col >= 1; col--) {
      str += `${col}`;
    }

    // print second half values
    for(let col = 2; col <= row; col++){
      str += `${col}`;
    }

    console.log(str);
  }

  // Descending Pattern
  for(let row = n- 1; row >= 1; row--){
    let str = "";

    // print spaces in the beginning
    for(let col = 1; col <= n - row; col++){
      str += " ";
    }

    // print first half values
    for(let col = row; col >= 1; col--){
      str += `${col}`;
    }

    // print second half values
    for(let col = 2; col <= row; col++){
      str += `${col}`;
    }

    console.log(str); 
  }
}

main();