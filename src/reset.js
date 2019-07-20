//resets locally stored data

const reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    let text = document.getElementById("text");
    text.value = "";
    postDataRemover();
    localStorage.removeItem("log");

})

function postDataRemover(){
    let posts = JSON.parse(localStorage.getItem("log"))

    for (p of posts){
        localStorage.removeItem(p);
    }
}
