var titleField = document.querySelector("#title");
var lengthField = document.querySelector("#length");
var genreOption = document.querySelector("#genre");
var movieList = document.querySelector("#movie-list");
var movieBtn = document.querySelector("#create-movie");

movieBtn.addEventListener("click", function () {
  var titleValue = titleField.value;
  var lengthValue = lengthField.value;
  var genreValue = genreOption.value;
  if (titleValue && lengthValue && genreValue) {
    var movie = new Movie(titleValue, lengthValue, genreValue);
    var listItem = document.createElement("li");
    listItem.textContent = movie.getData();
    movieList.appendChild(listItem);
    titleField.value = "";
    lengthField.value = "";
    genreOption.value = "";
  } else {alert("All fields are required");}
});