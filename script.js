'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

const openModalWindow = function() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeModalWindow = function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModalWindow)

btnCloseModal.addEventListener('click', closeModalWindow)
overlay.addEventListener('click', closeModalWindow)
