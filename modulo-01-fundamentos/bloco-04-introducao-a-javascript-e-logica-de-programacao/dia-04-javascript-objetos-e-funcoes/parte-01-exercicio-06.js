let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log(`O livro favorito de ${leitor.nome} se chama '${leitor.livrosFavoritos[0].titulo}'`); // Atenção ao [0] para funcionamento do código

  