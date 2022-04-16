// query selector variables go here 👇
var saveButton = document.querySelector(".save-button");
var inputUserTitle = document.querySelector(".form-title");
var inputUserBody = document.querySelector(".form-body");
var displayedIdeaCards = document.querySelector(".displayed-idea-cards");
var deleteButton = document.querySelector("#deleteButton");
var starButton = document.querySelector("#starButton");
var activeStarImage = document.querySelector(".star-active-image");

// Global Variables Go here 👇
var allIdeas = [];
var currentIdea;

// event listeners go here 👇
saveButton.addEventListener("click", displayCard);
displayedIdeaCards.addEventListener("click", handleCardEvent);

// functions and event handlers go here 👇
function displayCard(){
  event.preventDefault();
  getInputValue()
  createIdeaCard();
  resetForm();
  checkInput();
};

function getInputValue(){
  var userIdeaCard = new Idea(inputUserTitle.value, inputUserBody.value);
  allIdeas.push(userIdeaCard);
};

function resetForm() {
  inputUserTitle.value = "";
  inputUserBody.value = "";
};

function checkInput() {
  if (inputUserTitle.value != "" && inputUserBody.value != "") {
    saveButton.classList.remove("disable");
    saveButton.disabled = false;
  } else {
    saveButton.classList.add("disable");
    saveButton.disabled = true;
  }
};

// function getElementIdAndClass(event) {
//   var id = parseInt(event.target.id);
//   var itemClass = event.target.className;
//
//   deleteIdeaCard(id);
// };

function deleteIdeaCard(event) {
  for (var i = 0; i < allIdeas.length; i++) {
    if (parseInt(event.target.parentNode.parentNode.id) === allIdeas[i].id) {
      allIdeas.splice(i, 1);
    }
  }

  // createIdeaCard();
};
//when we call favoriteIdea card, pass in id
//use conditional to check id against the array at the i of id
//allI
function favoriteIdeaCard() {
  for (var i = 0; i < allIdeas.length; i++) {
    if (parseInt(event.target.parentNode.parentNode.id) === allIdeas[i].id) {
      allIdeas[i].star = !allIdeas[i].star;
    }
  }
  // createIdeaCard();
}
//check if the .star is property is truthy or falsy and classList.add or remove hidden
//class from the active star according to whether start property is true or false. if
//if star property is false you want to add the hidden class(which is there by default)
//if star property is true, remove hidden class so star


function handleCardEvent(event) {
//loop through allIdeas and check id of that iteration (allIdeas[i].id) against
// then if statement, "if event.target.idea"
  // for (var i = 0; i < allIdeas.length; i++) {
  //   if (parseInt(event.target.parentNode.parentNode.id) === allIdeas[i].id){
      if (event.target.id === "deleteButton") {
        deleteIdeaCard(event);
      } else if (event.target.id === "starButton") {
        favoriteIdeaCard(event);
      }
  //   }
  // }
  createIdeaCard();
}



function createIdeaCard () {
  displayedIdeaCards.innerHTML = '';

  for (var i = 0; i < allIdeas.length; i++) {
    displayedIdeaCards.innerHTML += (
      `<div class="card-wrap" id=${allIdeas[i].id}>
         <div class="card-header">
           <img src= "assets/star.svg" class="star-image" id="starButton" alt="star icon">
           <img src= "assets/star-active.svg" class="star-active-image hidden" alt="favorited star icon">
           <img src= "assets/delete.svg" class="delete" id="deleteButton" alt="delete icon">
         </div>
         <div class="card-body">
            <p class="title">${allIdeas[i].title}</p>
            <p class="idea-body">${allIdeas[i].body}</p>
         </div>
         <div class="card-footer">
          <img src= "assets/comment.svg" class="comment" alt="add comment icon">
          <p>Comment</p>
         </div>
      </div>`);
  }
};
