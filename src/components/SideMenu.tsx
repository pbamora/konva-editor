import React from 'react'
import IconButton from '../utils/components/IconButton'
import { BackgroundIcon, Box, ContentMenu, Menu } from './styles/SideMenu'
import { IoImageOutline } from 'react-icons/io5'
import { Padding } from '../styles/index'

const SideMenu: React.FC = () => {
  return (
    <>
      <Menu>
        <Padding />

        <BackgroundIcon>
          <button>
            <div/>
            <IoImageOutline size={32} />
            <p>Fundo</p>
          </button>
        </BackgroundIcon>

        <Box />

        <button>
          <IoImageOutline size={32} />
          <p>Produtos</p>
        </button>

        <Box />

        <button>
          <IoImageOutline size={32} />
          <p>Etiquetas</p>
        </button>

        <Box />

        <button>
          <IoImageOutline size={32} />
          <p>Imagens</p>
        </button>

        <Box />

        <button>
          <IoImageOutline size={32} />
          <p>Elementos</p>
        </button>

        <Box />

        <button>
          <IoImageOutline size={32} />
          <p>Fundo</p>
        </button>

        <Box />
      </Menu>
      <ContentMenu></ContentMenu>
    </>
  )
}

export default SideMenu
