/*

    1
   2 2
  3   3
 4     4
555555555
*/
import { getUserInput } from '.';

const main = async () => {
  const n =   +await getUserInput("Enter the number: ");

  for(let row = 1; row <= n; row++){
    let str = "";

    // spaces in the beginning
    for(let col = 1; col <= n - row; col++){ 
      str += " ";
    }

    // print values
    for(let col = 1; col <= row * 2 - 1; col++){
      if(row === n || col === 1 || col === row * 2 - 1){
        str += `${row}`;
      }else {
        str += " ";
      }
    }

    console.log(str)
  }
}

main();