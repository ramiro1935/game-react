import React from 'react'
// Data
import dictionary from 'data/dictionary.json'
import board from 'data/test-board-2.json'
// Hooks
import { useTableGame } from 'hooks/useTableGame'
// Styles
import './App.css'
import AppContainer from 'components/atoms/Container'
import Table from 'components/molecules/Table'
import Input from 'components/atoms/Input'
import Header from 'components/atoms/Header'

const App = () => {
  const { tiles, word, activeTiles, setItem, reset } = useTableGame(board)

  const onClick = (pos: number) => {
    setItem(pos)
  }

  const wordExist = dictionary.words.includes(word) || word.length == 0

  return (
    <AppContainer>
      {word.length > 0 && <Header onReset={reset} />}
      <Table
        tiles={tiles}
        activeTiles={activeTiles}
        onClick={onClick}
        wordIsValid={wordExist}
      />
      <Input placeholder='Lets go!' value={word} />
    </AppContainer>
  )
}

export default App
