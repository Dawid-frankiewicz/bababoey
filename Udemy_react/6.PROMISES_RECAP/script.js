//JSON PLACEHOLDER

//jak sie okazuje fetch to promise
console.log(fetch("https://jsonplaceholder.typicode.com/todos/1"));
//wszystkie akcje są przerabaiane bez czekania na fetch co nie jest dobre
// dlatego czekamy na await
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));
//////
async function getTodos() {
  const dane = await fetch("https://jsonplaceholder.typicode.com/todos");
  const daneC = await dane.json();
  console.log(daneC);
}
const todos = getTodos();
console.log(todos); //Jest promise ,ponieważ nie czeka na fetch bo nie jest asynchronicznie
