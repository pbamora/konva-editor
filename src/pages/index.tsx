import React from 'react'
import CanvasScreen from '../components/CanvasScreen'
import NavBar from '../components/NavBar'
import SideMenu from '../components/SideMenu'
import { Container } from '../styles'

const Home: React.FC = () => {
  return (
    <Container>

      <SideMenu />
      <NavBar />


    </Container>
  )
}

export default Home
