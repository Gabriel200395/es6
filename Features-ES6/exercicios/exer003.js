const users = [
  { id: 1, name: "jhon", age: 10 },
  { id: 2, name: "Alice", age: 11 },
  { id: 3, name: "Mary", age: 27 },
  { id: 4, name: "Ronald", age: 33 },
  { id: 5, name: "Louis", age: 15 },
];

const alterarNameUser = users.filter((user) => {
  if (user.id === 5) {
    return (user.name = "Gabriel");
  }
});

const mapearUsers = alterarNameUser.map((user) => {
  return user;
});

console.log(alterarNameUser);
console.log(mapearUsers);
