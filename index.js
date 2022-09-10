import { argv } from 'node:process';
import emoji from 'node-emoji';

if (process.argv[2]) {
  console.log(emoji.find(argv[2]).emoji);
} else {
  console.log(emoji.random().emoji);
}
