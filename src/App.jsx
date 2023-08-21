import './index.css'
import Header from './components/Header'
import ContainCards from './components/ContainCards'
import { useEffect, useState } from 'react'

function App() {

  const [characters, setCharacters] = useState("")
  const [inputSearch, setInputSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetch (`https://rickandmortyapi.com/api/character?page=${currentPage}&name=${inputSearch}`)
    .then((response) => response.json())
    .then(({results}) =>{
       setCharacters(results)
      })
  }, [inputSearch, currentPage])

  
  return (
    <>
      <Header setInputSearch={setInputSearch} setCurrentPage={setCurrentPage} />
      <ContainCards characters={characters} />

    </>
  )
}

export default App
