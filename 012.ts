/*
    * 
   * * 
  *   *
 *     * 
*********

n = 7

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");

  for (let row = 1; row <= n; row++) {
    let str = "";
    // print spaces 
    for (let col = 1; col <= Math.floor(n / 2); col++) {
      str += " ";
    }

    // print stars 
    for (let col = 1; col <= row; col++) {
      str += "* ";
    }
    console.log(str)
  }
}

const main2 = async () => {
  const n = +await getUserInput("Enter the number: ");

  //Outer Loop for number of Rows
  for (let row = 0; row < n; row++) {
    let str = "";

    // print spaces in the beginning
    for (let col = row; col < n; col++) {
      str += " ";
    }

    // Run a loop till j = 2*i to print odd no. of stars.
    for (let col = 0; col <= 2 * row; col++) {
      if (
        // first col after spaces
        col === 0 || 
        // second half of the row or right part of the column
        col === 2 * row || 
        // first row
        row === 0 || 
        // last row 
        row === n - 1) {
        str += "*";
      }
      else {
        // spaces inside triangle
        str += " ";
      }
    }

    console.log(str);
  }

}

main2();