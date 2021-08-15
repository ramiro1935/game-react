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
  //wordIsValid: boolean
}

const Table = ({ tiles, onClick, activeTiles }: TableProps) => {
  return (
    <TableContainer>
      {tiles.map((t, i) => {
        const id = `${t}${i}`
        const tileIsValid = activeTiles[i] 
        return (
          <Tile
            key={id}
            text={t}
            //color={wordIsValid ? activeTiles[i] && isValid ? Colors.valid : Colors.default: Colors.invalid}
            color={tileIsValid ? Colors.valid : Colors.default}
            onClick={() => onClick(i)}
          />
        )
      })}
    </TableContainer>
  )
}

export default Table
