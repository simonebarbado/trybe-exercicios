import React from 'react';
import './App.css';
class App extends React.Component {
  constructor() {
    super()
    console.log('Testando se o constructor está rodando');
  }

  // Dentro da classe não precisa escrever function antes de uma função
  // Será criada dentro do objeto de "this" na aba __proto__ o acesso da função
  handleClick() {
    console.log('Clicou no 1')
  }
  
  handleClick2() {
    console.log('Clicou no 2')
  }
  
  handleClick3() {
    console.log('Clicou no 3')
  }

  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
  render() {
    console.log(this);
    return (
      <div>
        <button onClick={this.handleClick}>Meu botão 1</button>
        <button onClick={this.handleClick2}>Meu botão 2</button>
        <button onClick={this.handleClick3}>Meu botão 3</button>
      </div>
    );
  }
}

export default App;