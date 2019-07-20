class ScrollText extends React.Component {

    constructor(props){
        super(props);
        this.state = {reader: new reader()};
    }

    render(){
        const a = <h1> no </h1>;
        const b = <h2> yes {this.state.reader.posts[0][1]} </h2>;
        return [a, b].reverse();
    }
}

function reader(){
    let post;
    this.log = JSON.parse(localStorage.getItem("log"));
    this.posts = [];

    for (post of this.log){
        this.posts.push(JSON.parse(localStorage.getItem(post)));
    }

}

ReactDOM.render(
    <ScrollText />,
    document.getElementById("notearea")
);
