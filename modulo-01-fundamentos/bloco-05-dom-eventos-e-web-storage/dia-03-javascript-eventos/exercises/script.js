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

// Exercício 06 - Ajuda do gabarito
function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '21px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();

// Exercício 07
function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};

newTaskSpan('Projeto:');

// Exercício 08
function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};

newTaskDiv('green');

// Exercício 09
function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

// Exercício 10
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

// Bonus
function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();