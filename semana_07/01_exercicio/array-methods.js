//Funçao tradicional
function sum(a, b) {
  return a + b;
}

//Arrow Function
const multiply = (a, b) => a * b; //retirada barra invertida porque estava causando erro

// Função com rest parameters => muito parecido com arguments, mas tem algumas diferenças entre eles, por exemplo, rest parameters é um array, enquanto arguments é um objeto semelhante a um array.

function calculateAverage(...numbers) {
  if (numbers.length === 0) return 0; // Verifica se o array está vazio
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  } 
  return sum / numbers.length; // Retorna a média
}

// Função usando spread operator com arrays
const fruits = ["maça", "banana", "laranja"];
const moreFruits = ["uva", "abacaxi"];
const allFruits = [...fruits, ...moreFruits]; // Combina os arrays

// Usando o spread com objetos
const person = {name: "Maria", age: 25};
const employee = {...person, id: 1001, department: "Engenharia"}; // Cria um novo objeto combinando propriedades

// Testando as funções
console.log("Soma:", sum(5, 3));
console.log("Multiplicação:", multiply(5,3));
console.log("Média de 3 números:", calculateAverage(4,6,8));
console.log("Média de 5 números:", calculateAverage(4,6,8,10,12));
console.log("Frutas combinadas:", allFruits);
console.log("Objeto Funcionário:", employee);