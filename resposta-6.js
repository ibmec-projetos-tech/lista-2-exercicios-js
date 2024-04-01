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


let nameReader = reader.name
let lastnameReader = reader.lastName
let title = reader.favoriteBooks[0].title;

console.log('Nome:', nameReader, lastnameReader, '- Livro favorito:', title)

reader.favoriteBooks.push( 
{
    title: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'JK Rowling',
    publisher: 'Rocco',
})

let numberFavorites = reader.favoriteBooks.length

console.log(nameReader,lastnameReader, 'tem un total de:', numberFavorites, 'livros preferidos!')