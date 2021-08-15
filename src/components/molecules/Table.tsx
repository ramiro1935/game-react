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
  wordIsValid: boolean
  onClick(arg: number): void
}

const Table = ({ tiles, onClick, activeTiles, wordIsValid }: TableProps) => {
  return (
    <TableContainer>
      {tiles.map((t, i) => {
        const id = `${t}${i}`
        const isInvalid = activeTiles[i] && !wordIsValid
        const isValid = activeTiles[i] && wordIsValid
        return (
          <Tile
            key={id}
            text={t}
            color={
              isInvalid
                ? Colors.invalid
                : isValid
                ? Colors.valid
                : Colors.default
            }
            onClick={() => onClick(i)}
          />
        )
      })}
    </TableContainer>
  )
}

export default Table
