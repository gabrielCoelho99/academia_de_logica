const person = {
    name: "Gabriel",
    age:25
}

function desafio (person) {
    return {
        ...person,
        isAdult: person.age >= 18
    };
}

function combineArrays(...arrays) {
  return [].concat(...arrays);
}

console.log(desafio(person));
console.log(desafio({ name: "Ana", age: 15 }));

console.log(combineArrays([1, 2], [3, 4]));
console.log(combineArrays(["a"], ["b", "c"], ["d","e"]));