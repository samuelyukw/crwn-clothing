import React, {Component} from 'react'
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {SignUpContainer, Title} from './sign-up.styles'
import {signUpStart} from '../../redux/user/user.actions'

class SignUp extends Component {
  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    const {displayName, email, password, confirmPassword} = this.state
    const {signUpStart} = this.props

    event.preventDefault()
    if(password !== confirmPassword) {
      alert("Passwords don't match!")
      return
    }

    signUpStart(displayName, email, password)
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <SignUpContainer>
        <Title>I do not have an account</Title>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='displayName' 
            label='name'
            handleChange={this.handleChange} 
            value={this.state.displayName} 
            required 
          />
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
          <FormInput 
            type='password'
            name='confirmPassword' 
            label='confirm the password'
            handleChange={this.handleChange}
            value={this.state.confirmPassword} 
            required 
          />
          <CustomButton type='submit'>sign up</CustomButton>
        </form> 
      </SignUpContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (displayName, email, password) => 
    dispatch(signUpStart({displayName, email, password}))
})

export default connect(null, mapDispatchToProps)(SignUp)
