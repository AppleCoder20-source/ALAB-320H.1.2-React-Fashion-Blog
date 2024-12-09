import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Articles from './components/Articles'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header/>
    <Navbar/>
    <Articles/>
    </>
  )
}

export default App
