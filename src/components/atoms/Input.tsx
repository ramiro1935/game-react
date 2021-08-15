import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.input`
  height: 30px;
  margin-top: 15px;
  border-radius: 5px;
  color: green;
`
interface InputProps {
  placeholder: string
  value: string
}

const Input = ({ placeholder, value }: InputProps) => {
  return (
    <InputContainer readOnly placeholder={placeholder} value={value}></InputContainer>
  )
}

export default Input
