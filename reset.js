//resets locally stored data

var reset = document.getElementById("reset");

reset.addEventListener("click", function () {
  var text = document.getElementById("text").value;
  text = "";
  localStorage.removeItem("log");
});