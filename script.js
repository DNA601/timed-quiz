const startQuizButton = document.getElementById('startQuiz-btn');

const questionContainerElement = document.getElementById('questions-container');

startQuizButton.addEventListener('click', startGame)
    //lets the user click on the start quiz button

function startGame() {
    console.log('Started')
    startQuizButton.classList.add('hide')
    questionContainerElement.classList.remove('hide');

    var timeEl = document.querySelector(".time");
    var mainEl = document.getElementById("head");

    var secondsLeft = 60;

    function setTime() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = secondsLeft + " seconds until your quiz ends!";
            if (secondsLeft === 0) {
                clearInterval(timerInterval)
                sendMessage();
            }
        }, 1000)
    }
    setTime();
    //sets timer after quiz starts


}