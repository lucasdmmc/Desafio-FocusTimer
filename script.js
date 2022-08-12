const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonLess = document.querySelector('less')
const displayMinutes = document.querySelector('.minutes')
const displaySeconds = document.querySelector('.seconds')
let minutes
let addMin = 5
function countdown() {
  setTimeout(function() {
    let seconds = Number(displaySeconds.textContent)
    let minutes = Number(displayMinutes.textContent)

    updateDisplay(minutes, 0)
    if(minutes <= 0){
      return
    }

    if(seconds <= 0){
      seconds = 6
      --minutes
    }
    
    
    updateDisplay(minutes, String(seconds -1))

    countdown()
  }, 1000) 
}

buttonPlay.addEventListener('click', function() {
  countdown()
})

buttonPlus.addEventListener('click', function() {
  addMinutes()
})

function addMinutes() {
  
  
}

function updateDisplay(minutes, seconds) {
  displayMinutes.textContent = String(minutes).padStart(2, '0')
  displaySeconds.textContent = String(seconds).padStart(2, '0')
}
