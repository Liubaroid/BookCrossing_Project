const { nanoid } = require('nanoid');
const myBook = [];

for (let index = 0; index < 25; index++) {
  myBook.push(nanoid(1));
}

console.log(myBook);

let runWhile = true;

while (runWhile) {
  const id = nanoid(1);
  const findItem = myBook.includes(id);

  if (!findItem) {
    runWhile = false;
  }
  myBook.push(id);
}

console.log(myBook);
