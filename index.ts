import { stdin } from 'node:process';
import { once } from 'node:events';

export const getUserInput = async (promptText = '') => {
  process.stdout.write(promptText); // Display the prompt
  const [data] = await once(stdin, 'data') as Buffer[];
  const userInput = await data.toString().trim();
  stdin.destroy(); // Close stdin stream
  return userInput;
}