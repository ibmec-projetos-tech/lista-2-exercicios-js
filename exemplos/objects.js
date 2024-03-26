// Objetos
const car = {
    brand: 'Fiat',
    model: '500',
    color: 'White',
    weight: 1061,
};

// // Acessar chaves de um objeto: Dot Notation (Notação de ponto): car.brand; Bracket Notation (Notação de colchetes): car['brand'].
console.log(car.brand);
console.log(car['color'])

// Adicionando novas entradas a um objeto

car.motor = 1.0
console.log(car)

car['cambio'] = 'automatico'
console.log(car)

// Métodos para manipular objetos

// // Object.keys('objeto que você deseja listar as chaves');

console.log(Object.keys(car))

// // Object.values('objeto que você deseja listar os valores');

console.log(Object.values(car))

// // Object.entries('objeto que você deseja listar as entradas completas');

const entradas = Object.entries(car)
console.log(entradas[0][1])
