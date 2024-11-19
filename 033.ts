/*

123456
1    6
1    6 
123456

*/
import { getUserInput } from '.';

const main = async () => {
  const rows =   +await getUserInput("Enter the number of rows: ");
  const cols = +await getUserInput("Enter the number of cols: ");

  // Ascending Pattern
  for(let row = 1; row <= rows; row++){
    let str = "";

    for(let col=1; col <= cols; col++){
      if(row === 1 || row === rows || col === 1 || col === cols){
        str += `${col}`;
      }else {
        str += " ";
      }
    }

    console.log(str) 

  }
}

main();