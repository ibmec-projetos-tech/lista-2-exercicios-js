# [LISTA 2] Exercícios JS - Array, For e Arrow Function

## Objetivos

Nesse exercício, você será capaz de:
- Manipular `arrays` (listas);
- Manipular `objects`;
- Utilizar o loop de repetição `for`;
- Desenvolver `algoritmos simples`;
- Utilizar a `lógica de programação` na resolução de problemas;
- Imprimir strings com `Template Literals`;
- Criar funções com Arrow Functions `() => {}`

## Lista de Exercícios

Crie um arquivo scripts.js para cada exercício (ou um único arquivo para todos os exercícios) e resolva os problemas abaixo:

### Exercício 1

Considere esse array para realizar os próximos exercícios.

```javascript
const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

a) Percorra o array imprimindo todos os valores contidos nele com a função console.log().

b) Some todos os valores contidos no array e imprima o resultado.

c) Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

d) Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

e) Utilizando for, descubra o maior valor contido no array e imprima-o.

f) Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

### Exercício 2

Utilize a estrutura de repetição `for` para desenvolver um algoritmo que seja capaz de inverter uma palavra, como a palavra “banana” para “ananab”. Utilize a string abaixo como exemplo. Depois, troque-a por outras para verificar se seu algoritmo está funcionando corretamente.

Dica: Pesquise sobre os seguintes métodos: `split()`, `reverse()` e `join()`.

```javascript
let word = 'ibmec';
```

### Exercício 3

Escreva um algoritmo que, dado um valor `n`, sendo `n > 1`, imprima na tela um quadrado feito de asteriscos de tamanho `n`. Por exemplo:

```javascript
n = 5

*****
*****
*****
*****
*****
```

Faça o mesmo algoritmo que antes, mas de modo que imprima um triângulo retângulo com `5` asteriscos de base. Por exemplo:

```javascript
n = 5

*
**
***
****
*****
```

### Exercício 4

Crie uma função (em formato tradicional) que recebe três argumentos: dois números e uma string representando uma operação matemática (`+`, `-`, `*`, `/`). A função deve retornar o resultado da operação aplicada aos dois números.

### Exercício 5

Crie uma arrow function que recebe um argumento numérico representando o comprimento da senha e retorna uma senha aleatória com o comprimento especificado. A senha deve conter letras maiúsculas, minúsculas e números.

Dica: Pesquise sobre as funções `Math.floor()`, `Math.random()` e `charAt()`.

### Exercício 6

Com base neste objeto, faça resolva os itens a seguir.

```javascript
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
```

a) Acesse as chaves `name`, `lastName` e `title` e exiba informações em um `console.log()` no seguinte formato: **O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.**.**

b) Adicione um novo livro favorito na chave `favoriteBooks`, que é um array de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:

```javascript
{
  title: 'Harry Potter e o Prisioneiro de Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
}
```

c) Acesse as chaves name e `favoriteBooks` e faça um `console.log()` no seguinte formato: **Julia tem {quantidade} livros favoritos.**

d) `{quantidade}` corresponde à quantidade de livros favoritos, sendo um número gerado automaticamente pelo seu código. Caso a quantidade seja igual a 1, a frase deve ser: **Julia tem 1 livro favorito.**

### Exercício 7

Suponha que você esteja trabalhando para uma escola e precise fazer algumas atualizações no sistema. Para isso, considere a seguinte base de dados:

```javascript
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
```

a) Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.
b) Crie uma função que retorne a soma do número total de estudantes em todos os cursos.
c) Crie uma função que verifica se uma determinada chave existe em todos os elementos do array `lessons`. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.
d) Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.

### Exercício 8

Por meio do array de frutas chamado `basket`, crie um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor.

Por exemplo, o array `['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva']` deverá retornar:

```javascript
{ 
  Melancia: 3,
  Abacate: 1,
  Uva: 1 
}
```

Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: `Sua cesta possui: x Melancias, x Abacates....`

O array `basket` a ser utilizado:

```javascript
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja', 'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia', 'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate', 'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva','Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva', 'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia', 'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana', 'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva', 'Uva' 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca', 'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana', 'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca', 'Laranja', 'Melancia', 'Pera' 'Jaca', 'Melancia', 'Uva', 'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca', 'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca', 'Banana', 'Pera', 'Abacate', 'Uva',
];
```

