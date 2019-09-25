import React from 'react';

class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isCompleted: false
        }
    }

    onCompletion = (item) => {
        this.setState({
            isCompleted: true
        })
    }


    render() {
        let text = this.props.item.text;
        let id = this.props.item.id;
        let textDecoration = this.state.isCompleted ? "line-through" : "none";

        return (
            <li onClick={this.onCompletion} style={{textDecoration}}>{id}: {text}</li>
        );
    }

}


export default Todo;
