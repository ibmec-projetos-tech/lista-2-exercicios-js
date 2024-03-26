// Arrays
const shoppingList = ['Arroz', 'Batata', 'Leite Ninho', 'Sucrilhos'];


// Printando o array

console.log(shoppingList);
console.table(shoppingList);



// // Índices

console.log(shoppingList[0]);

// // Métodos para adicionar e remover elementos de um array

// // push()	Adiciona um elemento ao final do array

shoppingList.push('Café');
console.log(shoppingList);


// // unshift()	Adiciona um elemento no início do array

shoppingList.unshift('Pão');
console.log(shoppingList);


// // pop()	Remove o último elemento do array


shoppingList.pop();
console.log(shoppingList);


// // shift()	Remove o primeiro elemento do array

shoppingList.shift();
console.log(shoppingList);