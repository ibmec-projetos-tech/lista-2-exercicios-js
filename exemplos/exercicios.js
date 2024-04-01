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

// Exercicio 5 -- Dúvida

const senha = (tamanho) => {
    let password = '';
    const numbers = '0123456789';

    for (i = 0; i < tamanho; i++) {
        const randomCaractere = Math.floor(Math.random()* numbers.length)
        password += numbers.charAt(randomCaractere)
    }
    return password
}

console.log(senha(5))

// Exercicios 6

const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    ],
  };

// a)

console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama '${reader.favoriteBooks[0].title}'`)

// b)

const livro2 = {
    title: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'JK Rowling',
    publisher: 'Rocco',
  }



reader.favoriteBooks.push(livro2)
console.log(reader)

// c)

console.log(`${reader.name} tem ${reader.favoriteBooks.length} livros favoritos`)

// d)

// ???

// Exercicio 7

const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Sabrina Moreira',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gisele Tessari',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Tamara Simões',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

  // a)

function obterValor(obj,pArray) {
    return Object.values(obj.lessons[pArray])
}

console.log(obterValor(school,0))

// b)

function totalAlunos(obj) {
    let total = 0;
    for (i = 0; i < obj.lessons.length; i++) {
        total += obj.lessons[i].students
    }
    return total
}

// c)

function VerificarChave(obj, chave) {
    for (let i = 0; i < obj.lessons.length; i++) {
        if (obj.lessons[i].hasOwnProperty(chave)) {
            return true;
        }
    }
    return false;
}

console.log(VerificarChave(school, 'professor'));

// d)

function AlterarTurno(obj, curso, turno) {
    for (let i = 0; i < obj.lessons.length; i++) {
        if (obj.lessons[i].course === curso) {
            obj.lessons[i].shift = turno;
        }
    }
    return obj;
}

console.log(AlterarTurno(school, 'Python', 'Noite'));
console.log(school)


