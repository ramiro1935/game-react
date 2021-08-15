import React from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
  display: grid;
  height: 100vh;
  align-content: center;
  width: 20%;
  margin: auto;

  @media screen and (max-width: 1200px) {
    width: 40%;
  }
  @media screen and (max-width: 800px) {
    width: 50%;
  }
  @media screen and (max-width: 600px) {
    width: 60%;
  }
  @media screen and (max-width: 450px) {
    width: 90%;
  }
`

interface ContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return <AppContainer>{children}</AppContainer>
}

export default Container
