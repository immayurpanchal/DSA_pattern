/*

*
* *
* * *
* * *
* *
*

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");
  
  // Ascending Pattern 
  for(let row = 1; row <= n; row++){
    let str = "";

    for(let col = 1; col <= row; col++){
      str += "* ";
    }
    console.log(str);
  }

  // Descending Pattern 
  for(let row = n; row >= 1; row--){
    let str = "";
    for(let col = row; col >=1; col--){
      str += "* ";
    }
    console.log(str);
  }
}

main();