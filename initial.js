var initialInput = document.querySelector('#initial-text');
var initialForm = document.querySelector('#initial-form');
var initialList = document.querySelector('#initial-list');
var initialCountSpan = document.querySelector('#scores-count');
var initial = [];
var goBack = document.getElementById('goBack');
var scoreBtn = document.getElementById('scoreBtn');

init();

function renderinitials() {
  initialList.innerHTML = '';
  initialCountSpan.textContent = initial.length;
  for(var i =0; i < localStorage.length; i++){
    var storeScore = localStorage.key(i);
    var actualScore = localStorage.getItem(storeScore);
    var li = document.createElement('li');
    if (storeScore !== 'score'){
    li.textContent = (storeScore + actualScore);
    li.setAttribute('data-index', i);
    initialList.appendChild(li);
  } else {

  }}
}

goBack.addEventListener('click', function(){
  location.replace('index.html');
})

function init() {
  var storedinitials = JSON.parse(localStorage.getItem('initials'));
  if (storedinitials !== null) {
    initial = storedinitials;
  }
  renderinitials();
}

function storeinitials() {
  var showScore = localStorage.getItem('score');
  var showInitial = initial.join('');
  localStorage.setItem(showInitial, showScore);
}

scoreBtn.addEventListener('click', function(event) {
  event.preventDefault();
  var initialText = initialInput.value.trim();
  if (initialText === '') {
    return;
  }
  initial.push(initialText);
  initialInput.value = '';
  storeinitials();
  renderinitials();
});

initialList.addEventListener('click', function(event) {
  var element = event.target;
  if (element.matches('button') === true) {
    var index = element.parentElement.getAttribute('data-index');
    initial.splice(index, 1);
    storeinitials();
    renderinitials();
  }
});
