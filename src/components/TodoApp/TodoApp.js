import React from 'react';
import TodoList from '../TodoList/TodoList';
import TodoService from '../../services/TodoService'


import { Container, Button, Header, Form, Grid, Statistic } from 'semantic-ui-react'
import Todo from '../Todo/Todo';

class TodoApp extends React.Component {
    state = {
        message: '',
        todo: [],
        user: {},
        count: 0
    }
    componentDidMount() {
        TodoService.getUser('TestUser2')
            .then(response => {
                this.setState({
                    user: response.data.user,
                    todo: response.data.user.todos,
                    count: response.data.user.todos.length
                });
            })
    }

    addTodo(e) {
        
        if (this.state.message.trim() === "") {
            return;
        }

        this.setState(state => {
            state.count++;

            let todoItem = {
                id: state.count,
                message: state.message,
                dateAdded: new Date().toLocaleString(),
                dateCompleted: '',
                isDone: false
            }
            let data = {
                todoItem: todoItem,
                username: state.user.username
            }
           
            TodoService.addTodo(data);
            const todo = state.todo.concat(todoItem);
            state.message = "";

            return {
                todo
            }
        });

        
    }

    searchTodo(e) {
        
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }



    render() {
        const style = {
            h1: {
                marginTop: '3em',
            },
            h2: {
                margin: '4em 0em 2em',
            },
            h3: {
                marginTop: '2em',
                padding: '2em 0em',
            },
            last: {
                marginBottom: '300px',
            },
        }

        return (
            <Container >
                <Header as='h3' style={style.h1} textAlign='center'>
                        {this.state.user.username} to do List
                </Header>
                <Grid colums='equal' centered padded>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Statistic>
                                <Statistic.Value>{this.state.count}</Statistic.Value>
                                <Statistic.Label>Todos</Statistic.Label>
                            </Statistic>
                        </Grid.Column>
                        <Grid.Column width={9}> 
                            <Form id="searchForm" onSubmit={this.searchTodo.bind(this)}></Form>
                            <Form onSubmit={this.addTodo.bind(this)}>
                                <Form.Field >
                                    <Form.Input label="Todo" name="todoItem" type="text" value={this.state.message} onChange={this.handleChange.bind(this)}></Form.Input>
                                    <Grid.Row>
                                        <Button primary type="submit">Add</Button>
                                        <Button form="searchForm" secondary type="submit">Search</Button>
                                    </Grid.Row>
                                </Form.Field>
                            </Form>
                          
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
                <TodoList username={this.state.user.username} todo={this.state.todo} />
            </Container>

        );
    }

}


export default TodoApp;
