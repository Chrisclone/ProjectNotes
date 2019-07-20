var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollText = function (_React$Component) {
    _inherits(ScrollText, _React$Component);

    function ScrollText(props) {
        _classCallCheck(this, ScrollText);

        var _this = _possibleConstructorReturn(this, (ScrollText.__proto__ || Object.getPrototypeOf(ScrollText)).call(this, props));

        _this.state = { reader: new reader() };
        return _this;
    }

    _createClass(ScrollText, [{
        key: "render",
        value: function render() {
            var a = React.createElement(
                "h1",
                null,
                " no "
            );
            var b = React.createElement(
                "h2",
                null,
                " yes ",
                this.state.reader.posts[0][1],
                " "
            );
            return [a, b].reverse();
        }
    }]);

    return ScrollText;
}(React.Component);

function reader() {
    var post = void 0;
    this.log = JSON.parse(localStorage.getItem("log"));
    this.posts = [];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = this.log[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            post = _step.value;

            this.posts.push(JSON.parse(localStorage.getItem(post)));
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

ReactDOM.render(React.createElement(ScrollText, null), document.getElementById("notearea"));