let submit = document.getElementById("submitter");


submit.addEventListener("click", () => {
  a(document.getElementById("text").value);
  document.getElementById("text").value = "";
})


function a(args) {
  console.log(args);
}
