// Adds new data to local storage

const submit = document.getElementById("submitter");


submit.addEventListener("click", () => {
  let text = document.getElementById("text").value;
  let time = a();
  logger(valueCreator(),text);
  text = "";
})


 // gets the time the post was made
function a() {
  let d = new Date();
  let ttime = d.getTime()
  return ttime;
}

//creates/updates a "log" list of all the posts made
function logger(value, pair){

  let logs = localStorage.getItem("log");
  if (logs === null){
    let a = JSON.stringify([value]);
    localStorage.setItem("log", a);
    console.log(a);
  } else {
    let a = JSON.parse(logs);
    a.push(value);
    localStorage.setItem("log", a);
    console.log(a);
  }
}

function textStore(value, text){

}

// returns the number of posts
function logIndex(){
  if (localStorage.getItem("log") === null) {
    return 0;
  } else {
    return JSON.parse(localStorage.getItem("log")).length;
  }
}

//creates the names of the posts
function valueCreator(){
  let currentdex = logIndex() + 1;
  let name = `logEntry${currentdex}`;
  console.log(name);
  return name;
}
