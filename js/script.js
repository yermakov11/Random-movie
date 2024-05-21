const buttonResult = document.querySelector(".heads_or_tails");
const result = document.querySelector(".result_movies");
const list = document.querySelector(".list_movies");
const addElement = document.querySelector(".input_movie");
const buttonAddMovies = document.querySelector(".add");
const arrString = [];

function addMovies() {
  const inputMovies = addElement.value;
  if (inputMovies.trim() !== "") {
    arrString.push(inputMovies);
  }
}

function updateList() {
  list.textContent = arrString.join(", ");
}

function RandomMovie() {
  let randomInd = Math.floor(Math.random() * arrString.length);
  let randomStr = arrString[randomInd];
  result.textContent = randomStr;
}

buttonResult.addEventListener("click", function () {
  RandomMovie();
});

buttonAddMovies.addEventListener("click", function () {
  addMovies();
  updateList();
});
