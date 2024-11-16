/*
1 2 3 4 5 
1 2 3 4 
1 2 3
1 2 
1
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");

  // Ascending Pattern
  for (let row = n; row >= 1; row--) {
    let str = "";

    for(let col = 1; col <= row; col++){
      str += `${col} `;
    }

    console.log(str);
  }

  // Descending Pattern
  for(let row = 2; row <= n; row++){
    let str = "";

    for(let col = 1; col <= row; col++){
      str += `${col} `;
    }

    console.log(str); 
  }
}

main();