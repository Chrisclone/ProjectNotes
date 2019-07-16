//resets locally stored data

const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
  let text = document.getElementById("text").value;
  text = "";
  localStorage.removeItem("log");

})
