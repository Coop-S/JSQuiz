var initialInput = document.querySelector("#initial-text");
var initialForm = document.querySelector("#initial-form");
var initialList = document.querySelector("#initial-list");
var initialCountSpan = document.querySelector("#scores-count");
var initial = [];
var goBack = document.getElementById('goBack');

init();

function renderinitials() {
  initialList.innerHTML = "";
  initialCountSpan.textContent = initial.length;

  for (var i = 0; i < initial.length; i++) {
    var initials = initial[i];
    var li = document.createElement("li");
    li.textContent = initials;
    li.setAttribute("data-index", i);
    // var button = document.createElement("button");
    // button.textContent = "Clear";
    // li.appendChild(button);
    initialList.appendChild(li);
  }
}

goBack.addEventListener('click', function(){
  location.replace('index.html');
})

function init() {
  var storedinitials = JSON.parse(localStorage.getItem("initials"));
  if (storedinitials !== null) {
    initial = storedinitials;
  }
  renderinitials();
}

function storeinitials() {
  localStorage.setItem("initials", JSON.stringify(initial));
}

initialForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var initialText = initialInput.value.trim();
  if (initialText === "") {
    return;
  }
  initial.push(initialText);
  initialInput.value = "";
  storeinitials();
  renderinitials();
});

initialList.addEventListener("click", function(event) {
  var element = event.target;
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    initial.splice(index, 1);
    storeinitials();
    renderinitials();
  }
});
