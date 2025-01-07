import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search_bar from './search_bar';
import { FaBook } from "react-icons/fa6";

function App() {

  return (
    <>
      <h1><FaBook id='bookIcon'/> Welcome to the Dictionary !</h1>
      <Search_bar/>
    </>
  )
}

export default App
