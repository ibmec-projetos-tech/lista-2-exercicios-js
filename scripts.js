// Exercício 1

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// a) Percorra o array imprimindo todos os valores contidos nele com a função console.log().
console.log("Valores do array:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// b) Some todos os valores contidos no array e imprima o resultado.
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Soma dos valores:", sum);

// c) Calcule e imprima a média aritmética dos valores contidos no array.
const average = sum / numbers.length;
console.log("Média aritmética:", average);

// d) Verifique se a média aritmética é maior que 20 e imprima a mensagem correspondente.
if (average > 20) {
    console.log("O valor da média aritmética é maior que 20");
} else {
    console.log("O valor da média aritmética é menor ou igual a 20");
}

// e) Utilizando for, descubra o maior valor contido no array e imprima-o.
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log("Maior valor:", max);

// f) Descubra quantos valores ímpares existem no array e imprima o resultado.
let oddCount = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddCount++;
    }
}
if (oddCount === 0) {
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log("Quantidade de valores ímpares:", oddCount);
}

// Exercício 2

// com for
let word = 'ibmec';
let invertedWord = '';

for (let i = word.length - 1; i >= 0; i--) {
    invertedWord += word[i];
}

console.log("Palavra original:", word);
console.log("Palavra invertida:", invertedWord);

// com os métodos
let word = 'ibmec';
let invertedWord = word.split('').reverse().join('');

console.log("Palavra original:", word);
console.log("Palavra invertida:", invertedWord);

// Exercício 3
function imprimirQuadrado(n) {
    if (n <= 1) {
        console.log("O valor de 'n' deve ser maior que 1.");
        return;
    }

    for (let i = 0; i < n; i++) {
        let linha = '';
        for (let j = 0; j < n; j++) {
            linha += '*';
        }
        console.log(linha);
    }
}

// Exemplo com n = 5
console.log("Quadrado com n = 5:");
imprimirQuadrado(5);

// Triângulo retângulo com asteriscos
function imprimirTriangulo(n) {
    if (n <= 1) {
        console.log("O valor de 'n' deve ser maior que 1.");
        return;
    }

    for (let i = 1; i <= n; i++) {
        let linha = '';
        for (let j = 1; j <= i; j++) {
            linha += '*';
        }
        console.log(linha);
    }
}

// Exemplo com n = 5
console.log("Triângulo com n = 5:");
imprimirTriangulo(5);

// Exercício 4
function calcularOperacao(numero1, numero2, operacao) {
    if (operacao === '+') {
        return numero1 + numero2;
    } else if (operacao === '-') {
        return numero1 - numero2;
    } else if (operacao === '*') {
        return numero1 * numero2;
    } else if (operacao === '/') {
        if (numero2 !== 0) {
            return numero1 / numero2;
        }
    }

// Exercício 5
const gerarSenhaAleatoria = comprimento => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let senha = '';
    for (let i = 0; i < comprimento; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indiceAleatorio);
    }
    return senha;
}

// Exemplo de uso:
const comprimentoSenha = 8; // Defina o comprimento da senha desejado
const senhaAleatoria = gerarSenhaAleatoria(comprimentoSenha);
console.log("Senha Aleatória:", senhaAleatoria);

// Exercício 6
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

// a) Acesse as chaves name, lastName e title e exiba informações em um console.log()
console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama ‘${reader.favoriteBooks[0].title}’.`);

// b) Adicione um novo livro favorito na chave favoriteBooks
reader.favoriteBooks.push({
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
});

// c) Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato
console.log(`${reader.name} tem ${reader.favoriteBooks.length} livros favoritos.`);

// d) {quantidade} corresponde à quantidade de livros favoritos
if (reader.favoriteBooks.length === 1) {
  console.log(`${reader.name} tem 1 livro favorito.`);
} else {
  console.log(`${reader.name} tem ${reader.favoriteBooks.length} livros favoritos.`);
}

// Exercício 7
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

// a) Obter o valor da chave de acordo com sua posição no array
const getValueByIndex = (obj, index) => {
  if (index >= 0 && index < obj.lessons.length) {
    const lesson = obj.lessons[index];
    return Object.values(lesson);
  } else {
    return null;
  }
};

// b) Retornar a soma do número total de estudantes em todos os cursos
const getTotalStudents = obj => {
  return obj.lessons.reduce((total, lesson) => total + (lesson.students || 0), 0);
};

// c) Verificar se uma determinada chave existe em todos os elementos do array lessons
const keyExistsInLessons = (obj, keyName) => {
  return obj.lessons.every(lesson => lesson.hasOwnProperty(keyName));
};

// d) Alterar o turno para noite no curso de Python
const changeShiftToNight = (data, courseName, newShift) => {
  data.lessons.forEach(lesson => {
    if (lesson.course === courseName) {
      lesson.shift = newShift;
    }
  });
};

// Testes
console.log("a) Obter o valor da chave de acordo com sua posição no array:");
console.log(getValueByIndex(school, 2)); // Retorna os valores do terceiro elemento (JavaScript)
console.log(getValueByIndex(school, 4)); // Retorna null pois não há um quinto elemento

console.log("\nb) Retornar a soma do número total de estudantes em todos os cursos:");
console.log(getTotalStudents(school)); // Retorna a soma dos estudantes em todos os cursos

console.log("\nc) Verificar se uma determinada chave existe em todos os elementos do array lessons:");
console.log(keyExistsInLessons(school, 'professor')); // Retorna true, 'professor' está presente em todos os elementos
console.log(keyExistsInLessons(school, 'shift')); // Retorna false, 'shift' não está presente em todos os elementos

console.log("\nd) Alterar o turno para noite no curso de Python:");
changeShiftToNight(school, 'Python', 'Noite');
console.log(school.lessons); // Verifica se o turno de Python foi alterado para 'Noite'

// Exercício 8
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja', 'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia', 'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate', 'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva','Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva', 'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia', 'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana', 'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva', 'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca', 'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana', 'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca', 'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva', 'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca', 'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca', 'Banana', 'Pera', 'Abacate', 'Uva'
];

// Função para contar as ocorrências das frutas e criar o objeto com as contagens
const contarFrutas = (basket) => {
  const contagem = {};
  for (let i = 0; i < basket.length; i++) {
    const fruta = basket[i];
    contagem[fruta] = (contagem[fruta] || 0) + 1;
  }
  return contagem;
};

// Função para imprimir as contagens na tela
const imprimirContagem = (contagem) => {
  let mensagem = 'Sua cesta possui:';
  for (const fruta in contagem) {
    mensagem += ` ${contagem[fruta]} ${fruta}s,`;
  }
  // Removendo a vírgula extra no final da string e adicionando um ponto final
  mensagem = mensagem.slice(0, -1) + '.';
  console.log(mensagem);
};

// Obtendo a contagem das frutas
const contagemFrutas = contarFrutas(basket);

// Imprimindo as contagens na tela
imprimirContagem(contagemFrutas);


