// function buildQuiz(){
//     // variable to store the HTML output
//     const output = [];
  
//     // for each question...
//     myQuestion.forEach(
//       (currentQuestion, questionNumber) => {
  
//         // variable to store the list of possible answers
//         const answers = [];
  
//         // and for each available answer...
//         for(letter in currentQuestion.answers){
  
//           // ...add an HTML radio button
//           answers.push(
//             `<label>
//               <input type="radio" name="question${questionNumber}" value="${letter}">
//               ${letter} :
//               ${currentQuestion.answers[letter]}
//             </label>`
//           );
//         }
  
//         // add this question and its answers to the output
//         output.push(
//           `<div class="question"> ${currentQuestion.question} </div>
//           <div class="answers"> ${answers.join('')} </div>`
//         );
//       }
//     );
  
//     // finally combine our output list into one string of HTML and put it on the page
//     quizContainer.innerHTML = output.join('');
// }

const quizContainer = document.getElementById('questions');
const timerContainer = document.getElementById('timer');
const startButton = document.getElementById('startBtn');
const buttonA = document.getElementById('buttonA');
const buttonB = document.getElementById('buttonB');
const buttonC = document.getElementById('buttonC');
const buttonD = document.getElementById('buttonD');
var currentQuestion = 0;
var timer = document.getElementById('timer');

function startGame() {
    nextQuestion()
    timer()
}

function timeTracker() {
    timer.innerHTML = countDown;
}

function nextQuestion() {
    var theQuestion = myQuestion[]
}

var countDown = //some number;
startButton.addEventListener('click', function(){
    function timer(){
        var time = setInterval(function(){
            
            if (countDown < 0){
                clearInterval(time);
                timer = document.getElementById('timer').innerHTML = 'Time is up';
            } else {
                countDown--;
            }
        }, 1000)
    }
    timer();

})



// function timeTrack(){
  
//     // keep track of user's correct answers
//     let numCorrect = 0;
  
//     // for each question...
//     myQuestions.forEach( (currentQuestion, questionNumber) => {
  
//       // find selected answer
//       const answerContainer = answerContainers[questionNumber];
//       const selector = `input[name=question${questionNumber}]:checked`;
//       const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
//       // if answer is correct
//       if(userAnswer === currentQuestion.correctAnswer){
//         numCorrect++;
//       }
//       // if answer is wrong or blank
//       else{
//         // subtract from timer
//         timerContainer{i--}
//       }
//     });
  
//     // show if they got it correct or incorrect
    
// }



let myQuestion = [
    // questions with answers
    {
        question: 'Who invented JavaScript?',
        answers: {
            a: 'Douglas Crockford',
            b: 'Darrell Javascript',
            c: 'Brendan Eich',
            d: 'Bill Gates'
        }
        correctAnswer: 'c'
    },
    {
        question: 'What HTML element do we put JavaScript in?',
        answers: {
            a: '<script>',
            b: '<javascript>',
            c: '<scripture>',
            d: '<java>'
        }
        correctAnswer: 'a'
    },
    {
        question: 'What is NOT a JavaScript Data Type?',
        answers: {
            a: 'Number',
            b: 'String',
            c: 'Bucket',
            d: 'Boolean'
        }
        correctAnswer: 'c'
    },
    {
        question: `What is the result of 1+6+'3'?`,
        answers: {
            a: '10',
            b: '21',
            c: '163',
            d: '73'
        }
        correctAnswer: 'd'
    },
    {
        question: 'Which one is NOT a type of pop-up box in javascript?',
        answers: {
            a: 'Open',
            b: 'Prompt',
            c: 'Alert',
            d: 'Confirm'
        }
        correctAnswer: 'a'
    },
    {
        question: 'Is JavaScript case sensitive?',
        answers: {
            a: 'Yes',
            b: 'No'
        }
        correctAnswer: 'a'
    },
    {
        question: 'Which boolean operator CANNOT be used in Javascript?',
        answers: {
            a: '&&',
            b: '||',
            c: '!',
            d: 'They can all be used'
        }
        correctAnswer: 'd'
    },
    {
        question: 'What does NaN mean in JavaScript?',
        answers: {
            a: 'Not Available Now',
            b: 'Not A Number',
            c: 'Number And Name',
            d: 'Never A Number'
        }
        correctAnswer: 'b'
    },
    {
        question: 'If you want something to happen when you click a button what do you use?',
        answers: {
            a: 'Events',
            b: 'Event blinders',
            c: 'Event Listeners',
            d: 'button'
        }
        correctAnswer: 'c'
    },
    {
        question: 'How does a FOR loop start in JavaScript?',
        answers: {
            a: 'for (i=0; i++)',
            b: 'for i=0; i<5',
            c: 'for (i<=2; i=0)',
            d: 'for (i=0; i<5; i++)'
        }
        correctAnswer: 'd'
    },
    {
        question: 'How do you find the smallest number value of g and x?',
        answers: {
            a: 'min(g,x)',
            b: 'Math.min(g,x)',
            c: 'Math.small(g,x)',
            d: 'small(g,x)'
        }
        correctAnswer: 'b'
    },