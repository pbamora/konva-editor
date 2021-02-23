import React from 'react'
import CanvasScreen from '../components/CanvasScreen'
import NavBar from '../components/NavBar'
import SideMenu from '../components/SideMenu'
import { Container } from '../styles'
import { images, elements } from '../utils/ListApi'

const api = { images, elements }

const Home: React.FC = () => {
  return (
    <Container>
      <SideMenu props={api} />
      <NavBar />
      <CanvasScreen />
    </Container>
  )
}

export default Home
