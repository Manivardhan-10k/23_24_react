import React from "react";

class Lifecycle extends React.Component {
    constructor(props) {
        super(props)
        console.log("hello from constructor");
        this.state = {
            count: null,
            data: null
        }
    }

    componentDidMount() {
        console.log("component did mount")

        fetch("https://fakestoreapi.com/products").then((data) => (data.json())).then((prodata) => this.setState({ data: prodata })).catch((err) => console.log(err))
    }


    static getDerivedStateFromProps(props, state) {
        console.log("hello from state props")
        console.log(props.count)
        if (props.count === state.count) {
            return null
        } else {
            return ({ count: props.count })
        }
    }



    render() {
        return (
            <>hello from lifecycle
                {console.log(this.state.data)}
                <h1>{this.state.count}</h1>
                {this.state.data?.map((ele,index) => <h1 key={index}>{ele.title}</h1>)}
            </>
        )
    }



}

export default Lifecycle