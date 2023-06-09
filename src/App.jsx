import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRouter from './components/AppRouter'
import { BrowserRouter } from 'react-router-dom'
import {ChakraProvider} from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
