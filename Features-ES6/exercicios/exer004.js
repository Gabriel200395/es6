const users = [
  { id: 1, name: "jhon", age: 10 },
  { id: 2, name: "Alice", age: 11 },
  { id: 3, name: "Mary", age: 27 },
  { id: 4, name: "Ronald", age: 33 },
  { id: 5, name: "Louis", age: 15 },
];

const [user1, user2, user3, user4, user5] = users;
const alteraNomeUser = {
  user1,
  user2,
  user3,
  user4,
  user5: { id: 5, name: "Gabriel", age: 25 },
};
console.log(alteraNomeUser);

const NovoArray = [];
NovoArray.push(alteraNomeUser.user5);
console.log(NovoArray);
