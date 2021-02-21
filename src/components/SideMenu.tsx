import React, { useCallback, useState } from 'react'
import { ContentMenu, Menu } from './styles/SideMenu'
import { List, Card, Layout, Row, Col } from 'antd'
import { Padding } from '../styles/index'
import theme from '../styles/theme'
import {
  IoImageOutline,
  IoTextOutline,
  IoAppsOutline,
  IoCloudUploadOutline
} from 'react-icons/io5'
import DinamicButton from '../utils/components/DinamicButtons'

interface Images {
  id: number
  name: string
  url: string
  heigth: number
  width: number
}

interface SideMenuProps {
  list: Array<Images>
}

const SideMenu: React.FC<SideMenuProps> = ({ list }) => {
  const typeButton = ['Imagens', 'Textos', 'Elementos', 'Uploads']
  const [selected, isSelected] = useState<string>(typeButton[0])

  const { Sider } = Layout

  return (
    <>
      <Menu>
        <Padding />

        <DinamicButton
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

      <ContentMenu>
        <Row gutter={[8, 8]}>
          <List
            dataSource={list}
            renderItem={item => (
              <List.Item>
                <Col span={12}>
                  <Card>
                    <img src={item.url} alt={item.name} width={180} />
                  </Card>
                </Col>
              </List.Item>
            )}
          />
        </Row>
      </ContentMenu>
    </>
  )
}

export default SideMenu
