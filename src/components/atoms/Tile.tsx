import React from 'react'
import { theme } from 'components/theme/theme'
import styled from 'styled-components'
import { Colors } from 'types'

const TileContainer = styled.button`
  cursor: pointer;
  width: 80%;
  background: ${props =>
    props.color == Colors.default
      ? `linear-gradient(1turn, ${theme.default.dark}, ${theme.default.default}, ${theme.default.light});`
      : props.color == Colors.valid
      ? `linear-gradient(1turn, ${theme.valid.dark}, ${theme.valid.default}, ${theme.valid.light});`
      : `linear-gradient(1turn, ${theme.invalid.dark}, ${theme.invalid.default}, ${theme.invalid.light});`}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${theme.default.dark};
  line-break: auto;
  &:hover {
    background: linear-gradient(1turn, ${theme.valid.dark}, ${
  theme.valid.default
}, ${theme.valid.light});
  }
  span {
    color: white;
    font-size: 40px;
    text-shadow: -2px -1px 4px #558abb;
  }
`
/* eslint-disable @typescript-eslint/no-explicit-any*/
interface TileProps {
  text: string
  color: Colors
  onClick: any
}

const Tile = ({ text, color, onClick }: TileProps) => {
  return (
    <TileContainer color={color} onClick={onClick}>
      <span>{text}</span>
    </TileContainer>
  )
}

export default Tile
