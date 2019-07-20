//resets locally stored data

var reset = document.getElementById("reset");

reset.addEventListener("click", function () {
    var text = document.getElementById("text");
    text.value = "";
    postDataRemover();
    localStorage.removeItem("log");
});

function postDataRemover() {
    var posts = JSON.parse(localStorage.getItem("log"));

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = posts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            p = _step.value;

            localStorage.removeItem(p);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}