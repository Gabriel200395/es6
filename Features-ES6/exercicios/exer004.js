const users = [
  { id: 1, name: "jhon", age: 10 },
  { id: 2, name: "Alice", age: 11 },
  { id: 3, name: "Mary", age: 27 },
  { id: 4, name: "Ronald", age: 33 },
  { id: 5, name: "Louis", age: 15 },
];

const alteraNomeUser = {
  ...users,
  [4]: { id: 5, name: "Gabriel", age: 25 },
};
console.log(alteraNomeUser);

console.log("---------------- exercicio 4 ---------------------");

const NovoArray = [];
NovoArray.push(alteraNomeUser[4]);
console.log(NovoArray);
