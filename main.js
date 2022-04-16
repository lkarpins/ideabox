// query selector variables go here 👇
var saveButton = document.querySelector(".save-button");
var inputUserTitle = document.querySelector(".form-title");
var inputUserBody = document.querySelector(".form-body");
var displayedIdeaCards = document.querySelector(".displayed-idea-cards");

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

function deleteIdeaCard(event) {
  for (var i = 0; i < allIdeas.length; i++) {
    if (parseInt(event.target.parentNode.parentNode.id) === allIdeas[i].id) {
      allIdeas.splice(i, 1);
    }
  }
};

function removeHiddenStar(i) {
  if (allIdeas[i].star === true){
      return `<img src= "assets/star-active.svg" class="star-active-image" id="activeStarButton" alt="favorited star icon">`
  } else {
      return  `<img src= "assets/star.svg" class="star-image" id="starButton" alt="star icon">`
  }
}

function favoriteIdeaCard(event) {
  for (var i = 0; i < allIdeas.length; i++) {
    if (parseInt(event.target.parentNode.parentNode.id) === allIdeas[i].id && allIdeas[i].star === false) {
      allIdeas[i].star = !allIdeas[i].star;
    } else if (parseInt(event.target.parentNode.parentNode.id) === allIdeas[i].id && allIdeas[i].star === true){
      allIdeas[i].star = false;

    }
  }
  createIdeaCard();
}

function handleCardEvent(event) {
  if (event.target.id === "deleteButton") {
        deleteIdeaCard(event);
  } else if (event.target.id === "starButton"|| event.target.id === "activeStarButton") {
        favoriteIdeaCard(event);
  }
  createIdeaCard();
}

function createIdeaCard () {
  displayedIdeaCards.innerHTML = '';
  for (var i = 0; i < allIdeas.length; i++) {
    displayedIdeaCards.innerHTML += (
      `<div class="card-wrap" id=${allIdeas[i].id}>
         <div class="card-header">
           ${removeHiddenStar(i)}
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
