const { nanoid } = require('nanoid');
const myBook = [];

for (let index = 0; index < 25; index++) {
  myBook.push(nanoid(10));
}

console.log(myBook);

let runWhile = true;

while (runWhile) {
  const id = nanoid(10);

  const findItem = myBook.includes(id);

  if (!findItem) {
    runWhile = false;
  }
  myBook.push(id);
}

console.log(myBook);

for (let index = 0; index < 10; index++) {
  let id = nanoid(5);
  const rndDigint = Math.round(Math.random()) * 9;
  const newId = id.replace(/[-_]/g, rndDigint);
  console.log(id, newId, Math.round(Math.random()) * 9);
}
