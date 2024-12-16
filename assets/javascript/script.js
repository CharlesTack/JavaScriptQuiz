//Variables
const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('submit-answer');
//const restartButton = document.getElementById('restart-btn');
const questionContainerElement = document.getElementById('question-area');
const questionElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-area');
const questionNumber = document.getElementById('question-number');
//const endScreenContainer = document.getElementById('end-screen');

let shuffledQuestions, currentQuestionIndex;
const maxNumberOfQuestions = 10;
let currentQuestionNumberCount = 0;
let finalScoreCount = 0;
let finalScorePercentage = 0;

let correctAnswerTally = document.getElementById('final-score');
let finalPercentageGrade = document.getElementById('final-percentage');

//Button event listeners
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
//restartButton.addEventListener('click', restartGame);

//FUNCTIONS

//Playing the game

function startGame() {
    startButton.classList.add('hide');
    nextButton.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    currentQuestionNumberCount++;
    questionNumber.innerText = currentQuestionNumberCount;
    questionElement.innerText = question.question;
    answerButtonsElement.textContent = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
            button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
        nextButton.disabled = true;
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct && correct!==undefined) {
        finalScoreCount++;
    }
    
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (maxNumberOfQuestions > currentQuestionIndex + 1) {
        nextButton.disabled = false;
    } else {
        goToEndScreen();
           }
}

//End (results) screen 

/*
function goToEndScreen(){
    endScreenContainer.classList.remove('hide');
    correctAnswerTally.innerText = finalScoreCount;
    finalPercentageGrade.innerText = ((finalScoreCount/10)*100);
}
*/

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
           }
}
    
    function clearStatusClass(element) {
        element.classList.remove('correct');
        element.classList.remove('wrong');
    }

//Restart Game
/*
    function restartGame(){
        endScreenContainer.classList.add('hide');
        questionNumber.innerText = 0;
        currentQuestionIndex = 0;
        currentQuestionNumberCount = 0;
        finalScoreCount = 0;
        finalScorePercentage = 0;
        nextButton.classList.add('hide');
        startGame();
    }
*/





//Questions dataset

const questions = [
    {
        question: "What type of data type is true or false?",
        answers: [
            { text: 'Boolean', correct: true },
            { text: 'String', correct: false },
            { text: 'Number', correct: false },
            { text: 'Object', correct: false }
            ]
    },
    {
        question: "What symbol is used to comment out a line in JavaScript?",
        answers: [
            { text: '/*', correct: false },
            { text: '//', correct: true },
            { text: '<!--', correct: false },
            { text: '>>', correct: false }
            ]
    },
    {
        question: "What keyword is used to declare a variable?",
        answers: [
            { text: 'bool', correct: false },
            { text: 'string', correct: false },
            { text: 'int', correct: false },
            { text: 'var', correct: true }
            ]
    },
    {
        question: "What does 'NaN' stand for?",
        answers: [
            { text: 'Not a Number', correct: true },
            { text: 'Null and Null', correct: false },
            { text: 'Not a Null', correct: false },
            { text: 'Not a Name', correct: false }
            ]
    },
    {
        question: "What keyword is used to declare a constant?",
        answers: [
            { text: 'let', correct: false },
            { text: 'const', correct: true },
            { text: 'var', correct: false },
            { text: 'static', correct: false }
            ]
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answers: [
            { text: 'call myFunction', correct: false },
            { text: 'myFunction()', correct: true },
            { text: 'run myFunction', correct: false },
            { text: 'execute myFunction', correct: false }
            ]
    },
    {
        question: "What symbol is used for strict equality comparison?",
        answers: [
            { text: '==', correct: false },
            { text: '=', correct: false },
            { text: '===', correct: true },
            { text: '!==', correct: false }
            ]
    },
    {
        question: "What function converts a string to a number?",
        answers: [
            { text: 'toNumber', correct: false },
            { text: 'convert', correct: false },
            { text: 'parseString', correct: false },
            { text: 'parseInt', correct: true }
            ]
    },
    {
        question: "Which keyword declares a block-scoped variable?",
        answers: [
            { text: 'declare', correct: false },
            { text: 'const', correct: false },
            { text: 'let', correct: true },
            { text: 'var', correct: false }
            ]
    },
    {
        question: "What method joins two or more arrays?",
        answers: [
            { text: 'merge', correct: false },
            { text: 'concat', correct: true },
            { text: 'join', correct: false },
            { text: 'add', correct: false }
            ]
    },
    {
        question: "What is the output of '2' + 2 in JavaScript?",
        answers: [
            { text: '22', correct: true },
            { text: '4', correct: false },
            { text: 'NaN', correct: false },
            { text: 'Error', correct: false }
            ]
    },
    {
        question: "What does JSON stand for?",
        answers: [
            { text: 'JavaScript Object Notation', correct: true },
            { text: 'JavaScript Online Notation', correct: false },
            { text: 'Java Syntax Object Notation', correct: false },
            { text: 'JavaScript Oriented Network', correct: false }
            ]
    },
    {
        question: "What is the return type of a function with no return value?",
        answers: [
            { text: 'void', correct: false },
            { text: '0', correct: false },
            { text: 'null', correct: false },
            { text: 'undefined', correct: true }
            ]
    },
    {
        question: "How do you find the length of an array?",
        answers: [
            { text: 'array.length()', correct: false },
            { text: 'array.count', correct: false },
            { text: 'array.length', correct: true },
            { text: 'array.size', correct: false }
            ]
    },
    {
        question: "What keyword is used to exit a loop?",
        answers: [
            { text: 'quit', correct: false },
            { text: 'stop', correct: false },
            { text: 'break', correct: true },
            { text: 'exit', correct: false }
            ]
    },
    {
        question: "What is the correct way to declare an array?",
        answers: [
            { text: 'let array = []', correct: true },
            { text: 'let array = {}', correct: false },
            { text: 'let array = ()', correct: false },
            { text: 'let array = ""', correct: false }
            ]
    },
    {
        question: "What is used to iterate over an array?",
        answers: [
            { text: 'while loop', correct: false },
            { text: 'for loop', correct: false },
            { text: 'if statement', correct: true },
            { text: 'switch statement', correct: false }
            ]
    },
    {
        question: "How do you write a string in JavaScript?",
        answers: [
            { text: 'text', correct: false },
            { text: '"text"', correct: true },
            { text: '(text)', correct: false },
            { text: '<text>', correct: false }
            ]
    },
    {
        question: "What is the default value of a variable that is declared but not assigned?",
        answers: [
            { text: 'null', correct: false },
            { text: 'undefined', correct: true },
            { text: '0', correct: false },
            { text: 'empty', correct: false }
            ]
    },
    {
        question: "How do you add a comment in JavaScript?",
        answers: [
            { text: '--', correct: false },
            { text: '#', correct: false },
            { text: '**', correct: false },
            { text: '//', correct: true }
            ]
            
    },
]