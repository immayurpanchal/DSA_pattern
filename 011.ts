/*

 **
*  *
*  *
****
*  *
*  *
*  *

n = 7

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");

  for (let i = 0; i < n; i++) {
    let line = '';

    for (let j = 0; j <= Math.floor(n / 2); j++) {
      // prints two column lines
      if ((j === 0 || j === Math.floor(n / 2)) && i !== 0 ||
        // print first line of alphabet
        (i === 0 && j !== 0 && j !== Math.floor(n / 2)) ||
        // prints middle line
        i === Math.floor(n / 2)) {
        line += '*';
      } else {
        line += ' ';
      }
    }

    console.log(line);
  }
}

const main2 = async () => {
  const n = +await getUserInput("Enter the number: ");

  // # of lines to print 
  for(let row = 1; row <= n; row++){
    let str = "";

    // # of columns are 50% of row
    // using ceil as j = 1
    for(let col = 1; col <= Math.ceil(n / 2); col++){
      // scenario where * should be printed
      if(
        // first column and not first row
        (col === 1 && row !== 1 )|| 
        // last column and not the first row
        (col === Math.ceil(n / 2) && row !== 1) || 
        // middle of the row
        row === Math.ceil(n / 2) || 
        // first row and not first or last column
        (row === 1 && col !== 1  && col !== Math.ceil(n / 2))
      ){
        str += "*";
      }else {
        str += " ";
      }
    }
    console.log(str)
  }
}

main2();