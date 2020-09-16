import React, {Component} from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
import {SignInContainer, Title, Button} from './sign-in.styles'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    const {email, password} = this.state

    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({email: '', password: ''})

    }
    catch(error) {
      console.error(error)
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <SignInContainer>
        <Title>I already have an account</Title>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            label='email'
            handleChange={this.handleChange} 
            value={this.state.email} 
            required 
          />
          <FormInput 
            type='password'
            name='password' 
            label='password'
            handleChange={this.handleChange}
            value={this.state.password} 
            required 
          />
          <Button>
            <CustomButton type='submit'>sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              sign in with google
            </CustomButton>
          </Button>
        </form> 
      </SignInContainer>
    )
  }
}

export default SignIn
