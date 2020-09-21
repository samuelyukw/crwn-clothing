import React, {Component} from 'react'
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {SignInContainer, Title, Button} from './sign-in.styles'
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'

class SignIn extends Component {
  constructor() {
    super()
    
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    const {emailSignInStart} = this.props
    const {email, password} = this.state

    emailSignInStart(email, password)
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    const {googleSignInStart} = this.props
    
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
            <CustomButton  type='button' onClick={googleSignInStart} isGoogleSignIn >
              sign in with google
            </CustomButton>
          </Button>
        </form> 
      </SignInContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn)
