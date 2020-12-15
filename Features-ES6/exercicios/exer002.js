const users = [
  { id: 1, name: "jhon", age: 10 },
  { id: 2, name: "Alice", age: 11 },
  { id: 3, name: "Mary", age: 27 },
  { id: 4, name: "Ronald", age: 33 },
  { id: 5, name: "Louis", age: 15 },
];

const idadeUsersM = users.filter((user) => {
  return user.age > 18;
});

console.log(idadeUsersM);

//JS exemplo
for (pos in users) {
  if (users[pos].age > 18) {
    console.log(`os usuarios maiores de idade são:  ${users[pos].name}`);
  }
}
