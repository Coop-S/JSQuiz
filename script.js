const quizContainer = document.getElementById('questions');
const timerContainer = document.getElementById('timer');
const startButton = document.getElementById('startBtn');
const buttonA = document.getElementById('buttonA');
const buttonB = document.getElementById('buttonB');
const buttonC = document.getElementById('buttonC');
const buttonD = document.getElementById('buttonD');
const score = document.getElementById('enter-score');
var timer = document.getElementById('timer');
var numberCorrect = 0;


function timeTracker() {
    timer.innerHTML = countDown;
}

var countDown = //some number;

// startButton.addEventListener('click', function(){
//     function timer(){
//         var time = setInterval(function(){
            
//             if (countDown < 0){
//                 clearInterval(timer);
//                 timer = document.getElementById('timer').innerHTML = 'Time is up';
//             } else {
//                 countDown--;
//             }
//         }, 1000)
//     }
//     timer();

// })

startButton.addEventListener('click',startGame);

function startGame(){
    startButton.style.display= 'none';
    timeTracker
    loadQuestion()
    timer()
}

let theQ = 0;
let lastQ = myQuestion.length - 1;

function loadQuestion() {
    let q = myQuestion[theQ];
    question.innerHTML = '<p>' + q.question + '</p>';
    buttonA.innerHTML = q.buttonA;
    buttonB.innerHTML = q.buttonB;
    buttonC.innerHTML = q.buttonC;
    buttonD.innerHTML = q.buttonD;
}

loadQuestion()
theQ++;
loadQuestion()

let myQuestion = [
    // questions with answers
    {
        question: 'Who invented JavaScript?',
        buttonA: 'Douglas Crockford',
        buttonB: 'Darrell Javascript',
        buttonC: 'Brendan Eich',
        buttonD: 'Bill Gates'
        correctAnswer: buttonC
    },
    {
        question: 'What HTML element do we put JavaScript in?',
        buttonA: '<script>',
        buttonB: '<javascript>',
        buttonC: '<scripture>',
        buttonD: '<java>'
        correctAnswer: buttonA
    },
    {
        question: 'What is NOT a JavaScript Data Type?',
        buttonA: 'Number',
        buttonB: 'String',
        buttonC: 'Bucket',
        buttonD: 'Boolean'
        correctAnswer: buttonC
    },
    {
        question: `What is the result of 1+6+'3'?`,
        buttonA: '10',
        buttonB: '21',
        buttonC: '163',
        buttonD: '73'
        correctAnswer: buttonD
    },
    {
        question: 'Which one is NOT a type of pop-up box in javascript?',
        buttonA: 'Open',
        buttonB: 'Prompt',
        buttonC: 'Alert',
        buttonD: 'Confirm'
        correctAnswer: buttonA
    },
    {
        question: 'Which boolean operator CANNOT be used in Javascript?',
        buttonA: '&&',
        buttonB: '||',
        buttonC: '!',
        buttonD: 'They can all be used'
        correctAnswer: buttonD
    },
    {
        question: 'What does NaN mean in JavaScript?',
        buttonA: 'Not Available Now',
        buttonB: 'Not A Number',
        buttonC: 'Number And Name',
        buttonD: 'Never A Number'
        correctAnswer: buttonB
    },
    {
        question: 'If you want something to happen when you click a button what do you use?',
        buttonA: 'Events',
        buttonB: 'Event blinders',
        buttonC: 'Event Listeners',
        buttonD: 'button'
        correctAnswer: buttonC
    },
    {
        question: 'How does a FOR loop start in JavaScript?',
        buttonA: 'for (i=0; i++)',
        buttonB: 'for i=0; i<5',
        buttonC: 'for (i<=2; i=0)',
        buttonD: 'for (i=0; i<5; i++)'
        correctAnswer: buttonD
    },
    {
        question: 'How do you find the smallest number value of g and x?',
        buttonA: 'min(g,x)',
        buttonB: 'Math.min(g,x)',
        buttonC: 'Math.small(g,x)',
        buttonC: 'small(g,x)'
        correctAnswer: buttonB
    },

function checkAnswer(guess) {
    if (myQuestion[theQ].correctAnswer === guess){
        numberCorrect++;
    } else{}
    if (theQ < lastQ){
        theQ++;
        loadQuestion;
    }else {
        clearInterval(timer);
    }
}

