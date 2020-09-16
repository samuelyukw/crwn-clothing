import React, {Component} from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import {SignUpContainer, Title} from './sign-up.styles'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    const {displayName, email, password, confirmPassword} = this.state

    event.preventDefault()
    if(password !== confirmPassword) {
      alert("Passwords don't match!")
      return
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, {displayName})

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''        
      })
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

export default SignUp
