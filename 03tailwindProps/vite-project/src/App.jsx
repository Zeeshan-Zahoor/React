import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  
  return (
    <>
      <h1 className='bg-blue-400 p-5 rounded-xl mb-10'>My name is Zeeshan</h1>
      <Card cardTitle={"Hello my name is Zeeshan Zahoor"} btnText='Click me!'/>
      <Card cardTitle={"Hello my name is Zeyafat Zahoor"} btnText='Get me!'/>
      <Card cardTitle={"Hello my name is Zainab Zahoor"} btnText='Add me!'/>
    </>
  )
}

export default App
