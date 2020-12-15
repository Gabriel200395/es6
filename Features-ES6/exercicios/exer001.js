const users = [
  { id: 1, name: "jhon", age: 10 },
  { id: 2, name: "Alice", age: 11 },
  { id: 3, name: "Mary", age: 27 },
  { id: 4, name: "Ronald", age: 33 },
  { id: 5, name: "Louis", age: 15 },
];

// ES6
const receberDadosUsers = { ...users };
console.log(receberDadosUsers);

// JS exemplo
console.log(users[0].age + " / " + users[0].name);
console.log(users[1].age + " / " + users[1].name);
console.log(users[2].age + " / " + users[2].name);
console.log(users[3].age + " / " + users[3].name);
console.log(users[4].age + " / " + users[4].name);
