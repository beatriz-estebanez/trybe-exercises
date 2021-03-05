for (let index = 0; index < document.querySelectorAll(".emergency-tasks h3").length; index += 1) {
  document.querySelectorAll(".emergency-tasks h3")[index].style.background = "purple";
}

for (let index = 0; index < document.querySelectorAll(".no-emergency-tasks h3").length; index += 1) {
  document.querySelectorAll(".no-emergency-tasks h3")[index].style.background = "black";
}

document.getElementsByClassName("no-emergency-tasks")[0].style.background = "yellow";

document.getElementsByClassName("emergency-tasks")[0].style.background = "lightsalmon";

document.getElementById("header-container").style.background = "mediumseagreen";

document.querySelector("#footer-container").style.background = "darkslategrey";
