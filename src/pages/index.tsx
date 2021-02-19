import React from 'react'
import CanvasScreen from '../components/CanvasScreen'
import NavBar from '../components/NavBar'
import SideMenu from '../components/SideMenu'
import { Container } from '../styles'
import { images } from '../utils/ListApi'

const Home: React.FC = () => {
  return (
    <Container>
      <SideMenu list={images} />
      <NavBar />
    </Container>
  )
}

export default Home
