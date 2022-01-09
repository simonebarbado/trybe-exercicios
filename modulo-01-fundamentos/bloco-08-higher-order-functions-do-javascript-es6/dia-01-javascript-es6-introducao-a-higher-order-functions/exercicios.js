// Exercício 01

const fullNameAndEmail = (nomeCompleto) => {
  const name = nomeCompleto.replace(' ', '_').toLowerCase();
  return { nomeCompleto, email: `${name}@trybe.com` };
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(fullNameAndEmail));

// Exercício 02

const raffle = (number) => {
  const randomNumber = Math.floor((Math.random() * 5)+1);
  return number === randomNumber ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(raffle(5));
