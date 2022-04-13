// query selector variables go here 👇
var saveButton = document.querySelector(".save-button");
var inputUserTitle = document.querySelector("#form-title");
var inputUserBody = document.querySelector("#form-body");

// Global Variables Go here 👇
var allIdeas = [];

// event listeners go here 👇
saveButton.addEventListener ("click", displayCard)

// functions and event handlers go here 👇

function displayCard(){
  event.preventDefault();
  createIdeaCard()
  console.log(allIdeas)
}
console.log(allIdeas)
function createIdeaCard(){
var userIdeaCard = new Idea(inputUserTitle.innerText.value, inputUserBody.innerText.value);
allIdeas.push(userIdeaCard);
console.log(allIdeas)

}
//
// function resetForm() {
//   createOwnTitle.value = "";
//   createOwnQuote.value = "";
//   createOwnUrl.value = "";
// };


// function createPoster() {
//   var userPoster = new Poster(
//     inputImageUrl.value,
//     inputTitle.value,
//     inputQuote.value
//   );
