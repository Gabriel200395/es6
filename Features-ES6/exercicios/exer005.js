const users = [
  { id: 1, name: "jhon", age: 10 },
  { id: 2, name: "Alice", age: 11 },
  { id: 3, name: "Mary", age: 27 },
  { id: 4, name: "Ronald", age: 33 },
  { id: 5, name: "Louis", age: 15 },
];

const total = users.reduce((total, user) => total + user.age, 0);

console.log(total);

// let total = 0;
// for (i = 0; i < users.length; i++) {
//   total += users[i].age;
//   console.log(total);
// }
