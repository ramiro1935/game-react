import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  color: gray;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 30px;
  padding: 10px;
`

const HeaderClose = styled.div`
  border-radius: 100%;
  background: gray;
  color: white;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;

  &:hover {
    background: #969091;
    cursor: pointer;
  }
`
interface HeaderProps {
  onReset(): void
}

const Header = ({ onReset }: HeaderProps) => {
  return (
    <HeaderContainer>
      Clear Word
      <HeaderClose onClick={onReset}>X</HeaderClose>
    </HeaderContainer>
  )
}

export default Header
