import React from 'react'
import { Menu, ContentMenu, Buttons, ArrowBack } from './styles/NavBar'
import { IoArrowBack, IoDownloadOutline } from 'react-icons/io5'
import IconButton from '../utils/components/IconButton'
import { Padding } from '../styles/index'

const NavBar: React.FC = () => {
  return (
    <>
      <Menu>
        <ContentMenu>
          <ArrowBack>
            <IconButton>
              <IoArrowBack size={22} />
            </IconButton>
          </ArrowBack>

          <Buttons>
            <button>
              <IoDownloadOutline size={22} />
              Download
            </button>
          </Buttons>
        </ContentMenu>
      </Menu>
    </>
  )
}

export default NavBar
