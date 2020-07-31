const quizContainer = document.getElementById('questions');
const timerContainer = document.getElementById('timer');
const startButton = document.getElementById('startBtn');
const buttonA = document.getElementById('buttonA');
const buttonB = document.getElementById('buttonB');
const buttonC = document.getElementById('buttonC');
const buttonD = document.getElementById('buttonD');
const result = document.getElementById('enter-score');
const answerButtons = document.getElementsByClassName('buttons');
let theQ = 0;
var numberCorrect = 0;
var countDown = 60;
var startTimer = false;
let myQuestion = [
    // questions with answers
    {
        question: 'Who invented JavaScript?',
        buttonA: 'Douglas Crockford',
        buttonB: 'Darrell Javascript',
        buttonC: 'Brendan Eich',
        buttonD: 'Bill Gates',
        correctAnswer: 'buttonC'
    },
    {
        question: 'What HTML element do we put JavaScript in?',
        buttonA: 'script',
        buttonB: 'javascript',
        buttonC: 'scripture',
        buttonD: 'java',
        correctAnswer: 'buttonA'
    },
    {
        question: 'What is NOT a JavaScript Data Type?',
        buttonA: 'Number',
        buttonB: 'String',
        buttonC: 'Bucket',
        buttonD: 'Boolean',
        correctAnswer: 'buttonC'
    },
    {
        question: `What is the result of 1+6+'3'?`,
        buttonA: '10',
        buttonB: '21',
        buttonC: '163',
        buttonD: '73',
        correctAnswer: 'buttonC'
    },
    {
        question: 'Which one is NOT a type of pop-up box in javascript?',
        buttonA: 'Open',
        buttonB: 'Prompt',
        buttonC: 'Alert',
        buttonD: 'Confirm',
        correctAnswer: 'buttonA'
    },
    {
        question: 'Which boolean operator CANNOT be used in Javascript?',
        buttonA: '&&',
        buttonB: '||',
        buttonC: '!',
        buttonD: 'They can all be used',
        correctAnswer: 'buttonD'
    },
    {
        question: 'What does NaN mean in JavaScript?',
        buttonA: 'Not Available Now',
        buttonB: 'Not A Number',
        buttonC: 'Number And Name',
        buttonD: 'Never A Number',
        correctAnswer: 'buttonB'
    },
    {
        question: 'If you want something to happen when you click a button what do you use?',
        buttonA: 'Events',
        buttonB: 'Event blinders',
        buttonC: 'Event Listeners',
        buttonD: 'button',
        correctAnswer: 'buttonC'
    },
    {
        question: 'How does a FOR loop start in JavaScript?',
        buttonA: 'for (i=0; i++)',
        buttonB: 'for i=0; i<5',
        buttonC: 'for (i<=2; i=0)',
        buttonD: 'for (i=0; i<5; i++)',
        correctAnswer: 'buttonD'
    },
    {
        question: 'How do you find the smallest number value of g and x?',
        buttonA: 'min(g,x)',
        buttonB: 'Math.min(g,x)',
        buttonC: 'Math.small(g,x)',
        buttonC: 'small(g,x)',
        correctAnswer: 'buttonB'
    },
]
let lastQ = myQuestion.length - 1;


startButton.addEventListener('click', function(){
    startGame();
    time();
});

function time(){
    var timer = setInterval(function(){
        if (countDown <= 0){
            timerContainer.innerHTML = 'Quiz Over';
            clearInterval(timer);
            endGame();
        } else {
            startTimer = true;
            countDown--;
            timerContainer.textContent = countDown;
        }
    }, 1000)
}

function startGame(){
    loadQuestion();
    if (theQ > lastQ){
        endGame();
    } else {
        loadQuestion()
    }
    startButton.style.display= 'none';
}

function showId (clicky) {
    quizContainer.innerHTML= '';
    buttonA.innerHTML = '';
    buttonB.innerHTML = '';
    buttonC.innerHTML = '';
    buttonD.innerHTML = '';
    try {
        checkAnswer(clicky);
        theQ++;
        loadQuestion();
    } catch(error) {
        startTimer = false;
        clearInterval(countDown);
    }
}

function loadQuestion() {
    buttonA.style.visibility = 'visible';
    buttonB.style.visibility = 'visible';
    buttonC.style.visibility = 'visible';
    buttonD.style.visibility = 'visible';
    for(i = 0; i < myQuestion.length; i++) {
        try {
            let q = myQuestion[theQ];
    quizContainer.innerHTML = '<p>' + q.question + '</p>';
    buttonA.innerHTML = q.buttonA;
    buttonB.innerHTML = q.buttonB;
    buttonC.innerHTML = q.buttonC;
    buttonD.innerHTML = q.buttonD;
        } catch(error){
            question = null;
            endGame();
        }
    
    }
} 

function checkAnswer(guess) {
    if (myQuestion[theQ].correctAnswer === guess){
        numberCorrect++;
    } else{
        countDown -= 10;
       timerContainer.textContent = countDown;
    } if (theQ <= lastQ){
        loadQuestion;
    } else{
        clearInterval(timerContainer);
        alert('Quiz Over');
    }
}

// store numberCorrect and time remaining

function endGame() {
    // move to score.html to enter in score
    window.location.replace('score.html');
    localStorage.setItem('score', numberCorrect);
}
