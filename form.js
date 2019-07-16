// Adds new data to local storage

var submit = document.getElementById("submitter");

submit.addEventListener("click", function () {
  var text = document.getElementById("text").value;
  var time = a();
  logger(valueCreator(), text);
  text = "";
});

// gets the time the post was made
function a() {
  var d = new Date();
  var ttime = d.getTime();
  return ttime;
}

//creates/updates a "log" list of all the posts made
function logger(value, pair) {

  var logs = localStorage.getItem("log");
  if (logs === null) {
    var _a = JSON.stringify([value]);
    localStorage.setItem("log", _a);
    console.log(_a);
  } else {
    var _a2 = JSON.parse(logs);
    _a2.push(value);
    localStorage.setItem("log", _a2);
    console.log(_a2);
  }
}

function textStore(value, text) {}

// returns the number of posts
function logIndex() {
  if (localStorage.getItem("log") === null) {
    return 0;
  } else {
    return JSON.parse(localStorage.getItem("log")).length;
  }
}

//creates the names of the posts
function valueCreator() {
  var currentdex = logIndex() + 1;
  var name = "logEntry" + currentdex;
  console.log(name);
  return name;
}