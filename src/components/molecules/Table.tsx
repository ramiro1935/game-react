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
  color: Colors
  isValid: boolean
}

const Table = ({ tiles, onClick, color, activeTiles, isValid }: TableProps) => {
  return (
    <TableContainer>
      {tiles.map((t, i) => {
        const id = `${t}${i}`
        return (
          <Tile
            key={id}
            text={t}
            color={
              activeTiles[i] && isValid
                ? Colors.valid
                : activeTiles[i] && !isValid
                ? Colors.invalid
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
