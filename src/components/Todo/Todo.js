import React from 'react';
import { List, Button, Form } from 'semantic-ui-react';
import TodoService from '../../services/TodoService';

class Todo extends React.Component {
    state = {
        isCompleted: false,
        isDeleted: false,
    }

    removeTodo = () => {
        let todoItem = this.props.item;
        let username = this.props.username;
        TodoService.removeTodo({todoItem, username});
        this.setState({
            isDeleted: true
        })
        
    }

    onCompletion = (item) => {
        this.setState({
            isCompleted: true
        })
    }


    render() {
        let message = this.props.item.message;
        let id = this.props.item.id;
        let dateAdded = this.props.item.dateAdded;
        let textDecoration = this.props.item.isDone ? "line-through" : "none";
        if(this.state.isDeleted){
            return (<React.Fragment></React.Fragment>)
        }else{
            return (
                <List.Content>
    
                    <List.Content>
                        <List.Header onClick={this.onCompletion} style={{ textDecoration }}>
                            {id}: {message}
                        </List.Header>
                        <List.Description>
                            Date Added: {dateAdded}
                        </List.Description>
                        <List.Description>
                            Date Completed: date here
                    </List.Description>
                        <List.Content floated='right'>
                            <Button color='teal'>Edit</Button>
                            <Button form='removeTodo' negative>Delete</Button>
                        </List.Content>
                    </List.Content>
                    <Form id='removeTodo' onSubmit={this.removeTodo}>
                    </Form>
                </List.Content>
            );
        }
        
    }

}


export default Todo;
