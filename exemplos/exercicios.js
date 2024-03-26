// Exercicio 1

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// a)

 for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
 }

// b)

function somaArray(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}
console.log(somaArray(numbers));

// c)

function mediaArray(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma / array.length;
}

console.log(mediaArray(numbers));
// d)

if (mediaArray(numbers) > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

// e)

function maior(array) {
    let maior = 0;
    for (let i = 0; i < array.length; i++){
        if (maior < array[i]){
            maior = array[i]
        }
    }
return maior;
}
console.log(maior(numbers));

// f)

function impar(array) {
    let impares = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            impares += 1
        }
    }

    if (impares == 0) {
        console.log('Nenhum valor ímpar encontrado')
    }else {
        console.log(`Há ${impares} elementos impares.`)
    }

    return impares
}
impar(numbers)

// Exercicio 2

function inverter(word) {
    return word.split('').reverse().join('')
}
console.log(inverter('banana'))

// Exercicio 3

// a)

function quadrado(n) {
    output = '';
    for (i = 0; i < n; i++) {
        output += '*'   
    }
    
    for (j = 0; j < n; j++) {
        console.log(output)
    }
}

quadrado(5)

// b)

function triangulo(n) {
    output = ''
    for (i = 0; i < n; i++) {
        output += '*'
        console.log(output)
    }
}

triangulo(5)

// Exercicio 4

function calculator(n1, n2, op) {
    let resultado;

    if (op === '+') {
        resultado = n1 + n2;
    } else if (op === '-') {
        resultado = n1 - n2;
    } else if (op === '*') {
        resultado = n1 * n2;
    } else if (op === '/') {
        resultado = n1 / n2;
    } else {
        console.log('Operador inválido');
        return;
    }
    
    console.log(resultado);
}

calculator(5,1,'/')

// Exercicio 5