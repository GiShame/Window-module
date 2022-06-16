'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)

  //   When there is no input
  if (!guess) {
    if (score > 1) {
      displayMessage('STUPID!')
      score--
      document.querySelector('.score').textContent = score
    } else {
      displayMessage('You lost!')
      document.querySelector('.score').textContent = 0
    }

    //  When player wins
  } else if (guess === secretNumber) {
    displayMessage('YOU are the BEST!')
    document.querySelector('.number').textContent = secretNumber
    document.querySelector('body').style.backgroundColor = '#00d200'
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.number').style.fontSize = '10rem'

    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low')
      score--
      document.querySelector('.score').textContent = score
    } else {
      displayMessage('You lost!')
      document.querySelector('.score').textContent = 0
      document.querySelector('body').style.backgroundColor = 'red'
    }
  }
})

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1
  score = 20
  document.querySelector('.score').textContent = score
  displayMessage('Start guessing...')
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
  document.querySelector('.number').style.fontSize = '6rem'
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = ''
})
