import React from 'react';
import Todo from '../Todo/Todo';
import { Button, Container, List } from 'semantic-ui-react';

class TodoList extends React.Component {
    render() {
        const style = {
            h1: {
              marginTop: '3em',
            },
            h2: {
              margin: '4em 0em 2em',
            },
            h3: {
              marginTop: '1em',
              padding: '1em 0em',
            },
            last: {
              marginBottom: '300px',
            },
          }

        return (
            
            <Container>
                <List selection verticalAlign='middle'>
                    {this.props.todo.map((item) => {
                        return (
                            <List.Item style={style.h3}>
                                <Todo username={this.props.username} key={item.id} item={item} />
                            </List.Item>
                        )
                    })
                    }
                </List>
            </Container>
        );
    }

}


export default TodoList;
