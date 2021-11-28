function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const days = document.getElementById('days');

  // Exercício 01
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfMonth() {
    for (let i of dezDaysList) {
      const day = document.createElement('li');
      day.innerHTML = i;
      day.className = 'day';
      days.appendChild(day);
      if (day.innerHTML == 24 || day.innerHTML == 25 || day.innerHTML == 31) {
        day.classList.add('holiday');
      }
      if(day.innerHTML == 4 || day.innerHTML == 11 || day.innerHTML == 18 || day.innerHTML == 25) {
        day.classList.add('friday');
      }
    }
  }
  createDaysOfMonth();
    
  // Exercício 02
  function makeButtonFeriados() {
    const buttonName = 'Feriados';
    const buttonFeriados = document.createElement('button');
    buttonFeriados.innerHTML = buttonName;
    buttonFeriados.id = 'btn-holiday';
    const pai = document.querySelector('.buttons-container');
    pai.appendChild(buttonFeriados);
  }
  makeButtonFeriados();
  
  // Exercício 03 - Ajuda ado gabarito
  function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'white';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    })
  };
  displayHolidays();
  
  // Exercício 04
  function makeButtonSextaFeira() {
    const buttonName = 'Sexta-Feira';
    const buttonSextaFeira = document.createElement('button');
    buttonSextaFeira.innerHTML = buttonName;
    buttonSextaFeira.id = 'btn-friday';
    const pai = document.querySelector('.buttons-container');
    pai.appendChild(buttonSextaFeira);
  }
  makeButtonSextaFeira();

// Exercício 05
function displayFridays(dezFridays) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  for (let i in fridays) {
    if (fridays[i].innerHTML !== newFridayText) {
        fridays[i].innerHTML = newFridayText;
    } else {
        fridays[i].innerHTML = dezFridays[i]; // Substitui com o valor da array fora da função
      }
    }
  })
};
let dezFridays = [ 4, 11, 18, 25 ]; // Para colocar na substituição
displayFridays(dezFridays);

// Exercício 06
