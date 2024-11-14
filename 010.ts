/*

* * * * 
 * * *
  * *
   *
   * 
  * *
 * * *
* * * *

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");

  // Descending Pattern
  for(let row = n; row >= 1; row--){
    let str = "";
    // print spaces
    for(let col = 1; col <= n - row; col++){ // 3 - 1 = 2 , 1 <= 2
      str += " ";
    }

    // print stars 
    for(let col = 1; col <= row; col++){
      str += "* ";
    }
    console.log(str);
  }

  // Ascending Pattern 
  for(let row = 1; row <= n; row++){
    let str = "";

    // print spaces 
    for(let col = 1; col <= n - row; col++ ){ 
      str += " ";
    }

    // print stars 
    for(let col = 1; col <= row; col++){
      str += "* ";
    }

    console.log(str);
  }
}

main();