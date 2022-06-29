const startButton = document.getElementById('startQuiz-btn')
const nextButton = document.getElementById('nextQuestion-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('questions')
const answerButtonsElement = document.getElementById('answers')
    //calls the elements in the html document.


const questions = [{
        question: 'What is Javascript',
        answers: [
            { text: 'Its what makes a web-page function', correct: true },
            { text: 'The body', correct: false },
            { text: 'Its the style', correct: false },
            { text: 'Both', correct: false },


        ]
    },
    {
        question: 'What do Arrays do?',
        answers: [
            { text: 'Stores values', correct: true },
            { text: 'They give you money', correct: false },
            { text: 'Its a function', correct: false },
            { text: 'They create elements', correct: false }
        ]
    }





]


let shuffledQuestions, currentQuestionIndex
    // mixes up the questions.

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
        //The purpose is to randomize a question.
    questionContainerElement.classList.remove('hide')


    var timeEl = document.querySelector(".time");
    var mainEl = document.getElementById("head");

    var secondsLeft = 11;

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




    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {

        element.classList.add('correct')


    } else {
        element.classList.add('incorrect')



    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}