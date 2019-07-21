class ScrollText extends React.Component {

    constructor(props){
        super(props);
        this.state = {reader: new reader()};
    }

    componentDidMount(){
        const submit = document.getElementById("submitter");
        const remove = document.getElementById("reset");
        submit.addEventListener(
            "click",
            () => this.update()
        )
        remove.addEventListener(
            "click",
            () => this.update()
        )
    }

    componentWillUnmount(){
        return null;
    }

    update(){
        this.setState({
            reader: new reader()
        });
    }

    render(){
        let post;
        const renderedposts = [];

        for (post of this.state.reader.posts){
            let html = (
                <div className="post">
                    <div className="time">{post[0]}</div>
                    <div className="note">{post[1]}</div>
                </div>
            )
            renderedposts.push(html);
        }

        return renderedposts.reverse();
    }
}

function reader(){
    let post;
    this.log = JSON.parse(localStorage.getItem("log"));
    this.posts = [];

    if (this.log !== null){
        for (post of this.log){
            this.posts.push(JSON.parse(localStorage.getItem(post)));
        }
    }
}

ReactDOM.render(
    <ScrollText />,
    document.getElementById("notearea")
);
