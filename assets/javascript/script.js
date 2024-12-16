// Variables
const startButton = document.getElementById('start-quiz-button');
const nextButton = document.getElementById('submit-answer'); // This button is no longer needed for navigation
const questionContainerElement = document.getElementById('question-area');
const questionElement = document.getElementById('question-text');
const answerButtonsElement = document.getElementById('answer-area');
const questionNumber = document.getElementById('question-number');
const correctAnswerTally = document.getElementById('score-of-score');
let shuffledQuestions, currentQuestionIndex;
let currentQuestionNumberCount = 0;
let finalScoreCount = 0;
// Button event listeners
startButton.addEventListener('click', startGame);
// Functions
// Start the game
function startGame() {
    startButton.parentElement.classList.add('hide');
    questionContainerElement.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    currentQuestionNumberCount = 0;
    finalScoreCount = 0;
    correctAnswerTally.innerText = finalScoreCount;
    setNextQuestion();
}
// Load the next question
function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}
// Display the current question
function showQuestion(question) {
    currentQuestionNumberCount++;
    questionNumber.innerText = `Question ${currentQuestionNumberCount}`;
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn', 'btn-primary', 'w-100', 'mb-2');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}
// Reset the UI state for the next question
function resetState() {
    answerButtonsElement.innerHTML = '';
}
// Handle answer selection
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    // Update the score if correct
    if (correct) {
        finalScoreCount++;
        correctAnswerTally.innerText = finalScoreCount;
    }
    // Apply styles to all buttons to show correct and incorrect answers
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true");
    });
    // Move to the next question after 1 second
    setTimeout(() => {
        currentQuestionIndex++;
        setNextQuestion();
    }, 1000);
}
// Apply styling to indicate correct or wrong answers
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}
// Clear existing status classes
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
// End the quiz
function endQuiz() {
    questionContainerElement.innerHTML = `
        <h2>Quiz Complete</h2>
        <p>Your final score: ${finalScoreCount} / ${questions.length}</p>
        <button class="btn btn-primary" onclick="location.reload()">Reset Page</button>
    `;
}
// Questions dataset
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
        question: "What symbol is used for strict equality comparison?",
        answers: [
            { text: '==', correct: false },
            { text: '=', correct: false },
            { text: '===', correct: true },
            { text: '!==', correct: false }
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
        question: "What keyword is used to declare a constant?",
        answers: [
            { text: 'let', correct: false },
            { text: 'const', correct: true },
            { text: 'var', correct: false },
            { text: 'static', correct: false }
        ]
    },
    {
        question: "What is the default value of a variable declared but not assigned?",
        answers: [
            { text: 'null', correct: false },
            { text: 'undefined', correct: true },
            { text: '0', correct: false },
            { text: 'empty', correct: false }
        ]
    }
];
