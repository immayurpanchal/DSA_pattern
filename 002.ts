/*

 * * * * * 
 * * * *
 * * *
 * *
 * 

*/
import { getUserInput } from '.';

const main = async () => {
  const n = +await getUserInput("Enter the number: ");
  for(let j = n; j >= 1; j--){
    let str = "";
    for(let i = 1; i <= j; i++){
      str += "*";
    }
    console.log(str);
  }
}

main();