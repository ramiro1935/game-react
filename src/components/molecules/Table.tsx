import React from 'react'
// Components
import Tile from 'components/atoms/Tile'
// Styles
import styled from 'styled-components'
import { ActiveTitle, Colors } from 'types'

const TableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  grid-auto-rows: minmax(70px, auto);
`

interface TableProps {
  tiles: string[]
  activeTiles: ActiveTitle
  onClick(arg: number): void
  isValid: boolean
  wordIsValid: boolean
}

const Table = ({ tiles, onClick, activeTiles, wordIsValid }: TableProps) => {
  return (
    <TableContainer>
      {tiles.map((t, i) => {
        const id = `${t}${i}`
        console.log({wordIsValid}, {activeTiles});
        return (
          <Tile
            key={id}
            text={t}
            color={activeTiles[i] && !wordIsValid ? Colors.invalid: activeTiles[i] && wordIsValid ? Colors.valid : Colors.default}
            onClick={() => onClick(i)}
          />
        )
      })}
    </TableContainer>
  )
}

export default Table
