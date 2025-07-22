const products = [
    {id:1, name: "Notebook", price: 1200, category: "Eletronicos"},
    {id:2, name: "Camiseta", price: 25, category: "Vestuário"},
    {id:3, name: "Cafeteira", price: 100, category: "Cozinha"},
    {id:4, name: "Fones de Ouvido", price: 80, category: "Eletronicos"},
    {id:5, name: "Calça Jeans", price: 45, category: "Vestuário"},
];

// Aqui é passado um array com 5 objetos onde cada um representa um produto
// com suas propriedades: id, name, price e category

// 1. Usando forEach para imprimir todos os produtos
console.log("Lista de Produtos:");
products.forEach((product, index) => {
    console.log(`${index + 1}. ${product.name} - R$$${product.price}`)
}) 
//🤔 O que é forEach?
// É um método que serve para percorrer cada item do array, sem criar um novo array.
// Ele executa uma função para cada item do array, permitindo que você realize ações com esses itens.

// Tive dúvidas no trecho do código onde é mostrado "console.log(`${index + 1}. ${product.name} - R$${product.price}`);" 
// E me perguntei o que seria esse "index + 1" e o que é esse "product.name" e "product.price".
// Como é usado um template string para mostrar o nome e o preço do produto, o "index + 1" é usado para mostrar somente a posição do produto na lista, já que o index por padrão começa em 0.

// 2. Usando map para criar um novo array apenas com nomes dos produtos
const productNames = products.map((products)=> products.name);
console.log("\nNomes dos Produtos:", productNames);

//Beleza, mas me pergunto o que é .map?
//Graças aos meus amigos YouTube e GPTeco, é um método de array do javaScriptt usado para criar um novo array, onde cada item é resultado de uma transformaçõ feita em cada elemento do array original.
// Meio confuso, mas basicamente, ele percorre o array original e aplica uma função a cada item, retornando um novo array com os resultados dessa função.

// 3. Usando map para criar um array de produtos com desconto de 10%
const discountedProducts = products.map((product) => {
    return {
        ...product,
        price: product.price * 0.9, //10% de desconto
    };
});

console.log("\nProdutos com Desconto de 10%:");
discountedProducts.forEach((product) => {
    console.log(
        `${product.name} - Original: R$${(product.price / 0.9).toFixed(2)}, Com desconto: R$${product.price.toFixed(2)}`
    )
});