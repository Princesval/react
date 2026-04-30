// CSS
import './App.css'

// Hooks
import { useState, useEffect, useCallback } from 'react'

// Data
import { wordsList } from './data/words.jsx'

// Components
import StartScreen from './components/StartScreen.jsx'
import Game from './components/Game.jsx'
import GameOver from './components/GameOver.jsx'

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"}
]

const guessesQty = 3


function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQty)
  const [score, setScore] = useState(0)

  const pickWordAndCategory = useCallback(() => {
    // Categoria aleatória
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    console.log(category)

    // Palavra aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return {word, category}
  }, [words])

  // Começar o jogo
  const startGame = useCallback(() => {
    clearLetterState()
    // Categaria e palavra escolhida
    const { word, category} = pickWordAndCategory();
    console.log(word, category)

    // Separando a palavra em letras
    let wordLetters = word.toLowerCase().split("")
    console.log(wordLetters)

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }, [pickWordAndCategory]);

  // Processar o input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase()

    // Verficando se a letra já foi usada

    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return
    }

    // Contar letras usadas e atualizar tentativas

    if(letters.includes(normalizedLetter)) {
      setGuessedLetters((rightGuessedLettersState) => [
        ...rightGuessedLettersState, normalizedLetter
      ])
    } else {
      setWrongLetters((wrongGuessedLettersState) => [
        ...wrongGuessedLettersState, normalizedLetter
      ])

      setGuesses((currentGusses) => currentGusses -1)
    }
  };

  const clearLetterState = () => {
    setGuessedLetters([])
    setWrongLetters([])
  }

  // Lose condition
  useEffect(() => {
    if(guesses <= 0) {
      clearLetterState()

      setGameStage(stages[2].name)
    }
  }, [guesses])

  // Win condition
  useEffect(() => {

    const uniqueLetters = [...new Set(letters)]

    if(guessedLetters.length === uniqueLetters.length) {
      setScore((currentScore) => currentScore += 100)
      startGame();
    }
    
  }, [guessedLetters, letters, startGame])

  // Reinicar o jogo
  const retry = () => {
    setScore(0)
    setGuesses(guessesQty)
    setGameStage(stages[0].name)
  }

  return (
    <>
      <div className="App">
        {gameStage === 'start' && <StartScreen startGame={startGame} />}
        {gameStage === 'game' && <Game verifyLetter={verifyLetter} 
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}/>}
        {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
      </div>
    </>
  )
}

export default App
