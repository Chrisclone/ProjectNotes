// Adds new data to local storage

var submit = document.getElementById("submitter");

submit.addEventListener("click", function () {
    var text = document.getElementById("text");
    textStore(valueCreator(), text.value);
    logger(valueCreator(), text.value);
    text.value = "";
});

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

        localStorage.setItem("log", JSON.stringify(_a2));
        console.log(_a2);
    }
}

function textStore(value, written) {
    if (written == "") {

        window.alert("If you want to submit text, then\nyou've got to write some first!");

        throw new Error("write the text");
    } else {
        var t = a();
        var entry = [t, written];
        console.log(JSON.stringify(entry));
        localStorage.setItem(value, JSON.stringify(entry));
    }
}

// gets the time the post was made
function a() {
    var d = new Date();
    var ttime = d.toISOString();
    return ttime;
}

//creates the names of the posts
function valueCreator() {
    var currentdex = logIndex() + 1;
    var name = "logEntry" + currentdex;
    return name;
}

// returns the number of posts
function logIndex() {
    if (localStorage.getItem("log") === null) {
        return 0;
    } else {
        return JSON.parse(localStorage.getItem("log")).length;
    }
}