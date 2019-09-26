import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import TodoService from '../../services/TodoService'
import Main from '../Main'
import { Redirect } from "react-router-dom";

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    isAuthenticated: false,
    isLoggingIn: false
  }

  login = () => {
    this.setState({
      isLoggingIn: true
    }, () => {

      let {username, password} = this.state;
      TodoService.login({username, password})
      .then(response => {
       
        this.setState({
          isLoggingIn: false
        })
        
        if(response.data.user){
          this.setState({
            isAuthenticated: true
          })
        }
        
      })


    })
  }
  
  onChange = (e, {name, value}) => {
    this.setState({
      [name]: value
    })
  }

  render() {

    if(this.state.isAuthenticated){
      return  <Redirect to="/" />
    }else{
      return (
        <div>
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <Image src='/logo.png' /> Log-in to your account
        </Header>
              <Form loading={this.state.isLoggingIn} onSubmit={this.login} size='large'>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' onChange={this.onChange} name="username" placeholder='Username' />
                  <Form.Input
                    fluid
                    onChange={this.onChange}
                    icon='lock'
                    name='password'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                  />
  
                  <Button color='teal' fluid size='large'>
                    Login
                  </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
      );
    }
    
  }
}

export default LoginForm