const users = [
  { id: 1, name: "jhon", age: 10 },
  { id: 2, name: "Alice", age: 11 },
  { id: 3, name: "Mary", age: 27 },
  { id: 4, name: "Ronald", age: 33 },
  { id: 5, name: "Louis", age: 15 },
];

//peguei todos os dados do usuarios
const receberIdadesUsers = { ...users };
console.log(receberIdadesUsers);

const somarIdadesUsers = [];

//adicionei no novo array
somarIdadesUsers.push(
  receberIdadesUsers[0].age,
  receberIdadesUsers[1].age,
  receberIdadesUsers[2].age,
  receberIdadesUsers[3].age,
  receberIdadesUsers[4].age
);

console.log(somarIdadesUsers);

const somarIdade = somarIdadesUsers.reduce((ele, age) => {
  return ele + age;
});
console.log(somarIdade);
