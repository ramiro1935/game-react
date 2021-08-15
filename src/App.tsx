import React from 'react'
// Data
import board from './data/test-board-2.json'
// Hooks
import { useTableGame } from 'hooks/useTableGame'
// Styles
import './App.css'
import AppContainer from 'components/atoms/Container'
import Table from 'components/molecules/Table'
import Input from 'components/atoms/Input'
import Header from 'components/atoms/Header'
import { Colors } from 'types'

const App = () => {
  const { tiles, activeTiles, isValid, setItem, reset } = useTableGame(board)

  const onClick = (pos: number) => {
    setItem(pos)
    console.log({ isValid })
  }

  const activeLetters = tiles
    .filter((tile, index) => activeTiles[index] === true)
    .join('')

  return (
    <AppContainer>
      <Header onReset={reset} />
      <Table
        tiles={tiles}
        activeTiles={activeTiles}
        onClick={onClick}
        isValid={isValid}
        color={Colors.default}
      />
      <Input placeholder='Lets go!' value={activeLetters} />
    </AppContainer>
  )
}

export default App
