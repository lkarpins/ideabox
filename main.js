// query selector variables go here 👇
var saveButton = document.querySelector(".save-button");
var inputUserTitle = document.querySelector(".form-title");
var inputUserBody = document.querySelector(".form-body");
var displayedIdeaCards = document.querySelector(".displayed-idea-cards");
// Global Variables Go here 👇
var allIdeas = [];
var currentIdea;

// event listeners go here 👇
saveButton.addEventListener ("click", displayCard)

// functions and event handlers go here 👇
function displayCard(){
  event.preventDefault();
  getInputValue()
  createIdeaCard();
  resetForm();
}

function getInputValue(){
var userIdeaCard = new Idea(inputUserTitle.value, inputUserBody.value);
allIdeas.push(userIdeaCard);

}

function resetForm() {
  inputUserTitle.value = "";
  inputUserBody.value = "";
};

function createIdeaCard () {
  displayedIdeaCards.innerHTML = '';
console.log(allIdeas);
  for (var i = 0; i < allIdeas.length; i++) {
    displayedIdeaCards.innerHTML += (
      `<div class="card-wrap">
         <div class="card-header">
           <img src= "assets/star.svg" class="star-image" alt="star icon"></img>
           <img src= "assets/star-active.svg" class="star-active-image hidden" alt="favorited star icon"></img>
           <img src= "assets/delete.svg" class="delete" alt="delete icon"></img>
           <img src= "assets/delete-active.svg" class="delete-active hidden" alt="deleted red icon"></img>
         </div>
         <div class="card-body">
            <p class="title">${allIdeas[i].title}<p>
            <p class="idea-body">${allIdeas[i].body}</p>
         </div>
         <div class="card-footer">
          <img src= "assets/comment.svg" class="comment" alt="add comment icon"></img>
          <p>Comment</p>
         </div>
      </div>`);
  }
}










// function createPoster() {
//   var userPoster = new Poster(
//     inputImageUrl.value,
//     inputTitle.value,
//     inputQuote.value
//   );
