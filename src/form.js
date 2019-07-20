// Adds new data to local storage

const submit = document.getElementById("submitter");


submit.addEventListener("click", () => {
    let text = document.getElementById("text");
    textStore(valueCreator(),text.value);
    logger(valueCreator(),text.value);
    text.value = "";
})




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

        localStorage.setItem("log", JSON.stringify(a));
        console.log(a);
    }
}

function textStore(value, written){
    if (written == ""){

        window.alert(`If you want to submit text, then
you've got to write some first!`);

        throw new Error("write the text");

    } else {
        let t = a();
        let entry = [t, written];
        console.log(JSON.stringify(entry));
        localStorage.setItem(value, JSON.stringify(entry));
    }
}

// gets the time the post was made
function a() {
    let d = new Date();
    let ttime = d.toISOString();
    return ttime;
}

//creates the names of the posts
function valueCreator(){
    let currentdex = logIndex() + 1;
    let name = `logEntry${currentdex}`;
    return name;
}

// returns the number of posts
function logIndex(){
    if (localStorage.getItem("log") === null) {
        return 0;
    } else {
        return JSON.parse(localStorage.getItem("log")).length;
    }
}
