let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20 
let highScore = 0
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}
document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.guess').value = null
    score = 20
    document.querySelector('.score').textContent = score    
    secretNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.number').textContent = '?'
    displayMessage('Start Guessing...')
})
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess)
    if (!guess) {
        displayMessage('No Number')
    }else if (guess === secretNumber) {
        displayMessage('Correct Number')
        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber
        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }
    } else if (guess !== secretNumber) {
        if ( score > 1) {
            displayMessage('You Lost The Game!')
            document.querySelector('.score').textContent = 0
        }
    }
})

document.querySelector('again').addEventListener('click', function(){
    score = 20 
    secretNumber = Math.trunc(Math.random() + 20) + 1
    displayMessage('Start Guessing...')
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})