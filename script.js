const startQuizButton = document.getElementById('startQuiz-btn')

const questionContainerElement = document.getElementById('questions-container')

startQuizButton.addEventListener('click', startGame)
    //lets the user click on the start quiz button

function startGame() {
    console.log('Started')
    startQuizButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
}