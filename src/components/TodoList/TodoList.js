import React from 'react';
import Todo from '../Todo/Todo'
class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todo.map( (item) => {
                    return (
                      <Todo key={item.id} item={item}/>
                    )
                })
                }
            </ul>
        );
    }

}


export default TodoList;
