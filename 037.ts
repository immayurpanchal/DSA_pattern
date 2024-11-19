/*

1 2 3 4 5 6 7 8 9 10 
2 3 4 5 6 7 8 9 10 1 
3 4 5 6 7 8 9 10 1 2 
4 5 6 7 8 9 10 1 2 3 
5 6 7 8 9 10 1 2 3 4 
6 7 8 9 10 1 2 3 4 5 
7 8 9 10 1 2 3 4 5 6 
8 9 10 1 2 3 4 5 6 7 
9 10 1 2 3 4 5 6 7 8 
10 1 2 3 4 5 6 7 8 9 

*/
import { getUserInput } from '.';

const main = async () => {
  const n =   +await getUserInput("Enter the number: ");

  for(let row = 1; row <= n; row++){
    let str = "";

    for(let col = row; col <= n + row - 1; col++){
      str += `${col % n === 0 ? n : col % n} `
    }

    console.log(str)
  }
}

main();