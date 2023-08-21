import './index.css'
import Header from './components/Header'
import ContainCards from './components/ContainCards'
import { useEffect, useState } from 'react'

function App() {

  const [characters, setCharacters] = useState("")

  useEffect(() => {
    fetch (`https://rickandmortyapi.com/api/character?page=1`)
    .then((response) => response.json())
    .then(({results}) =>{
       setCharacters(results)
      })
  }, [])

  
  return (
    <>
      <Header />
      <ContainCards characters={characters} />

    </>
  )
}

export default App
