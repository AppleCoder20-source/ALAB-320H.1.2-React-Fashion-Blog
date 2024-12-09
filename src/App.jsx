import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Articles from './components/Articles'

function App() {

  return (
    <>
    <Navbar/>
    <Articles/>
    </>
  )
}

export default App
