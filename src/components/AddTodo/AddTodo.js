import React from 'react';
import TodoList from '../TodoList/TodoList';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            todo: [],
            count: 0
        }
    }

    addTodo(e) {

        e.preventDefault()
      
        if(this.state.text.trim() === ""){
            return;
        }

        this.setState(state => {
            state.count++;
           
            let todoItem = {
                id: state.count,
                text: state.text
            }
            const todo = state.todo.concat(todoItem);
            state.text = "";
           
            return {
                todo
            }
        });
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        })
    }



    render() {
        return (
            <div>
                <span>Todo's: {this.state.count} </span>
                <br></br>
                <form onSubmit={this.addTodo.bind(this)}>
                    <input name="todoItem" type="text" value={this.state.text} onChange={this.handleChange.bind(this)}></input>
                    <button type="submit">Add</button>
                </form>
                <TodoList todo={this.state.todo} />
            </div>
        );
    }

}


export default AddTodo;
