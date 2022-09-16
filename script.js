'use strict';

//modal window
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.close-modal');
let btnsOpenModal = document.querySelectorAll('.show-modal');

let openModal = function () {
modal.classList.remove('hidden');
overlay.classList.remove('hidden');
};

const closeModal = function () {
modal.classList.add('hidden');
overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
 closeModal();
 }
});

// todo list
const inputtdl = document.querySelector('.textarea');
const buttontdl = document.querySelector('.buttoninput');
const listtdl = document.querySelector('.todolist');

function clickButton(e) {
  e.preventDefault();
  addTodo();
}

function addTodo() {
  const itemall = document.createElement('div');
  itemall.classList.add('itemall')

  const item = document.createElement('p');
  item.classList.add('item');
  item.innerText = inputtdl.value;
  itemall.appendChild(item);

  if (inputtdl.value === '') return

  const checkbutton = document.createElement("button");
  checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
  checkbutton.classList.add("check-button")
  itemall.appendChild(checkbutton);

  const trashbutton = document.createElement("button");
  trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
  trashbutton.classList.add("trash-button");
  itemall.appendChild(trashbutton);

  listtdl.appendChild(itemall);
  inputtdl.value = '';
}

function okdel(e) {
const item = e.target;

if (item.classList[0] === 'check-button') {
const todolist = item.parentElement;
todolist.classList.toggle('checklist');
 }
 if (item.classList[0] === 'trash-button') {
const todolist = item.parentElement;
 todolist.remove()
  }
}
buttontdl.addEventListener('click', clickButton);
listtdl.addEventListener('click', okdel);


