/*

rows=3
cols=5

12121
21212
12121

*/
import { getUserInput } from '.';

const main = async () => {
  const rows =   +await getUserInput("Enter the number of rows: ");
  const cols =   +await getUserInput("Enter the number of cols: ");

  for(let row = 1; row <= rows; row++){
    let str = "";

    for(let col = 1; col <= cols; col++){
      if(row % 2 === 1 && col % 2 === 1 || row % 2 === 0 && col % 2 === 0){
        str += "1"
      }else {
        str += "2"
      }
    }

    console.log(str)
  }
}

main();