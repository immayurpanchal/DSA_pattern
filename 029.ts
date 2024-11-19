/*

1 0 1 0 1
0 1 0 1
1 0 1
0 1
1

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");

  // Ascending Pattern
  for(let row= n; row >= 1; row--){
    let str = "";

    for(let col = 1; col <= row; col++){
      if(row % 2 === 1 && col % 2 === 1 || row % 2 === 0 && col % 2 === 0){
        str += "1 ";
      }else {
        str += "0 ";
      }
    }

    console.log(str)

  }
}

main();