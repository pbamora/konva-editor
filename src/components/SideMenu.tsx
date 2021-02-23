import React, { useCallback, useState } from 'react'
import { ContentMenu, Menu } from './styles/SideMenu'
import {
  Grid,
  GridList,
  GridListTile,
  List,
  makeStyles
} from '@material-ui/core'
import { Padding } from '../styles/index'
import {
  IoImageOutline,
  IoTextOutline,
  IoAppsOutline,
  IoCloudUploadOutline
} from 'react-icons/io5'
import DinamicButton from '../utils/components/DinamicButtons'
import ButtonNavigation from '../utils/components/buttonNavigation'
import ListImages from './listImages'

interface Images {
  id: number
  name: string
  url: string
  heigth: number
  width: number
}

interface Elements {
  id: number
  name: string
  url: string
  heigth: number
  width: number
}

interface SideMenuProps {
  props: {
    elements: Array<Elements>
    images: Array<Images>
  }
}

const SideMenu: React.FC<SideMenuProps> = ({ props }) => {
  const typeButton = ['Imagens', 'Textos', 'Elementos', 'Uploads']
  const [selected, isSelected] = useState<string>(typeButton[0])

  console.log(selected)

  const imageSelected = () => {
    if (selected === 'Images') {
      return
    }
  }

  console.log(imageSelected())

  return (
    <>
      <Menu>
        <Padding />

        <DinamicButton
          onClick={() => imageSelected}
          onSelected={() => isSelected(typeButton[0])}
          selected={selected === 'Imagens' ? true : false}
          text={typeButton[0]}
        >
          <IoImageOutline size={26} />
        </DinamicButton>

        <DinamicButton
          onSelected={() => isSelected(typeButton[1])}
          selected={selected === 'Textos' ? true : false}
          text={typeButton[1]}
        >
          <IoTextOutline size={26} />
        </DinamicButton>

        <DinamicButton
          onSelected={() => isSelected(typeButton[2])}
          selected={selected === 'Elementos' ? true : false}
          text={typeButton[2]}
        >
          <IoAppsOutline size={26} />
        </DinamicButton>

        <DinamicButton
          onSelected={() => isSelected(typeButton[3])}
          selected={selected === 'Uploads' ? true : false}
          text={typeButton[3]}
        >
          <IoCloudUploadOutline size={26} />
        </DinamicButton>
      </Menu>
      <ListImages
        props={selected === 'Imagens' ? props.images : props.elements}
      />
    </>
  )
}

export default SideMenu
