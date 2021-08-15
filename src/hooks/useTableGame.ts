import { ROW_LENGT } from 'constants/config'
import { useEffect, useState } from 'react'
import { ActiveTitle } from 'types'

const rowLength = ROW_LENGT
const diagonalLength = 2

enum Limits {
  right = 3,
  left = 0,
}

interface OrientationTypes {
  [type: string]: number
}

interface useTableGameProps {
  board: string[]
}

type Orientation = 'left' | 'right' | 'top' | 'bottom' | 'diagonal' | 'itself'

const orientationObj: OrientationTypes = {
  itself: 0,
  left: -1,
  right: 1,
  top: -1,
  bottom: 1,
  diagonal: -1,
}

export const useTableGame = (initialize: useTableGameProps) => {
  const [tiles] = useState<string[]>(initialize?.board ?? [])
  const [activeTiles, setActiveTiles] = useState<ActiveTitle>([])
  const [lastIndex, setLastIndex] = useState<number>(-1)
  const [actualIndex, setActualIndex] = useState<number>(-1)
  const [isValid, setIsValid] = useState<boolean>(true)
  const [word, setWord] = useState<string>('')

  useEffect(() => {
    const isValidState = moveIsValid(lastIndex, actualIndex)
    setIsValid(isValidState)
    
    if (isValidState) {
      setWord(prevWord =>
        prevWord.concat(tiles[actualIndex].toLocaleLowerCase())
      )
      setActiveTiles(prevTiles => ({ ...prevTiles, [actualIndex]: true }))
    } else {
      setActualIndex(lastIndex)
    }
  }, [actualIndex, lastIndex])

  const reset = () => {
    setActiveTiles([])
    setWord('')
    setActualIndex(-1)
    setLastIndex(-1)
  }

  const getRow = (pos: number): number => {
    if (pos >= 0 && pos <= 3) return 0
    if (pos >= 4 && pos <= 7) return 1
    if (pos >= 8 && pos <= 11) return 2
    return 3
  }

  const setItem = (newIndex: number) => {
    if (lastIndex == -1) {
      setLastIndex(newIndex)
      setActualIndex(newIndex)
    } else {
      setLastIndex(actualIndex)
      setActualIndex(newIndex)
    }
  }

  // Moves
  const getRowVertical = (indexRow: number, orientation: Orientation): number =>
    (indexRow + orientationObj[orientation]) * rowLength

  const getRowHorizontal = (indexRow: number): number => indexRow * rowLength

  // Possibles moves vertical - horizontal - diagonal
  const validMoveToRow = (last: number, move: number, step: number) => {
    return (orientation: Orientation, diagonalMove: string = '') => {
      if (orientation === 'itself' && move === last && move != -1) return true
      const indexRow = getRow(last)

      if (orientation === 'top' || orientation === 'bottom') {
        const actualRow = getRowVertical(indexRow, orientation)
        const possibleMove = actualRow + step

        if (move == possibleMove) return true
        return false
      } else if (
        (orientation === 'left' && step != Limits.left) ||
        (orientation === 'right' && step != Limits.right)
      ) {
        const actualRow = getRowHorizontal(indexRow)
        const possibleMove = actualRow + step + orientationObj[orientation]

        if (move === possibleMove) return true
        return false
      }
      if (
        (orientation == 'diagonal' &&
          diagonalMove == 'right' &&
          step != Limits.right) ||
        (diagonalMove == 'left' && step != Limits.left)
      ) {
        const actualRow = getRowVertical(indexRow, orientation)
        const possibleMoveTop = actualRow + step + orientationObj[diagonalMove]
        const possibleMoveBottom =
          actualRow +
          diagonalLength * rowLength +
          step +
          orientationObj[diagonalMove]

        if (move === possibleMoveTop || move === possibleMoveBottom) return true
        return false
      }
      return false
    }
  }

  // Validating if there is a possible valid movement
  const moveIsValid = (lastIndex: number, actualIndex: number) => {
    const move = lastIndex % rowLength
    const possibleMove = validMoveToRow(lastIndex, actualIndex, move)
    const possibleItSelf = possibleMove('itself')
    if (possibleItSelf) return true
    const possibleTop = possibleMove('top')
    if (possibleTop) return true
    const possibleBottom = possibleMove('bottom')
    if (possibleBottom) return true
    const possibleLeft = possibleMove('left')
    if (possibleLeft) return true
    const possibleRight = possibleMove('right')
    if (possibleRight) return true
    const possibleDiagonalLeft = possibleMove('diagonal', 'left')
    if (possibleDiagonalLeft) return true
    const possibleDiagonalRight = possibleMove('diagonal', 'right')
    if (possibleDiagonalRight) return true
    return false
  }

  return { tiles, word, activeTiles, isValid, setItem, reset }
}
