import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import color from './utils/color'
import Element from './components/Element'

function App() {

  const getIndexRandom = array => Math.floor(Math.random() * array.length)//funcinción elemento random
  
  const firtsElement = quotes[getIndexRandom(quotes)] // primer elemento random
  const firtsColor = color[getIndexRandom(color)] // primero color aleatorio
  
  const [randomQuote, setRandomQuote] = useState (firtsElement) //renderizar el primer elemento
  const [randomColor, setRandomColor] = useState (firtsColor) //renderizar el primer color

  const backgroundObejct = {
    backgroundColor: randomColor //asignación del color random al fondo de App
  }

  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)]) //reacalcular un nuevo quotes y color
    setRandomColor(color[getIndexRandom(color)])
  }

  return (
    <div style={backgroundObejct} className="App">
      <QuoteBox 
      randomQuote = {randomQuote}
      randomColor = {randomColor}
      getRandomAll = {getRandomAll}
      />
      <Element 
      randomColor = {randomColor}
      />
    </div>
  )
}

export default App

