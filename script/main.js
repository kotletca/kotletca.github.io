var myImage = document.querySelector(".frame");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "imagine/cb8bfd4a7acda41ad657fad5592a7165.jpg") {
    myImage.setAttribute("src", "imagine/second rose.jpg");
  } else {
    myImage.setAttribute("src", "imagine/cb8bfd4a7acda41ad657fad5592a7165.jpg");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Главное к этому часу, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Главное к этому часу, " + storedName;
}
myButton.onclick = function () {
  setUserName();
}
let myHead = document.querySelector('h2')
myHead.textContent = 'Very important information'