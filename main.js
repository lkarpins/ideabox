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
displayedIdeaCards.addEventListener("click", getElementIdAndClass);

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

function getElementIdAndClass(event) {
  var id = parseInt(event.target.id);
  var itemClass = event.target.className;

  deleteIdeaCard(id);
};

function deleteIdeaCard(id) {
  for (var i = 0; i < allIdeas.length; i++) {
    if (id === allIdeas[i].id) {
      allIdeas.splice(i, 1);
    }
  }

  createIdeaCard();
};

function createIdeaCard () {
  displayedIdeaCards.innerHTML = '';

  for (var i = 0; i < allIdeas.length; i++) {
    displayedIdeaCards.innerHTML += (
      `<div class="card-wrap">
         <div class="card-header">
           <img src= "assets/star.svg" class="star-image" alt="star icon">
           <img src= "assets/star-active.svg" class="star-active-image hidden" alt="favorited star icon">
           <img src= "assets/delete.svg" class="delete" id= ${allIdeas[i].id} alt="delete icon">
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










// function createPoster() {
//   var userPoster = new Poster(
//     inputImageUrl.value,
//     inputTitle.value,
//     inputQuote.value
//   );
