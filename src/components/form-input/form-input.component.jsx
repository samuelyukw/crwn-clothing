import React from 'react'
import {GroupContainer, InputContainer, LabelContainer} from './form-input.styles'

const FormInput = ({handleChange, label, ...otherProps}) => (
  <GroupContainer>
    <InputContainer onChange={handleChange} {...otherProps} />
    {
      label ?
      (<LabelContainer className={otherProps.value.length ? 'shrink' : ''}>
        {label}
      </LabelContainer>)
      : null
    }
  </GroupContainer>
)

export default FormInput
