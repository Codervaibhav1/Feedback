import React from 'react'
import Navbar from './components/Navbar'
import { Container } from '@mui/material'
import BoxContainer from './components/BoxContainer'
import Card from './components/Card'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Container>
        <BoxContainer/>
        <Card/>
      </Container>
    </div>
  )
}

export default App