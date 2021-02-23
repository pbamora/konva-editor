import { GridList, GridListTile, makeStyles } from '@material-ui/core'
import { borderRadius, padding } from 'polished'
import React from 'react'
import { ContentMenu } from './styles/SideMenu'

interface Images {
  id: number
  name: string
  url: string
  heigth: number
  width: number
}

interface ListImagesProps {
  props: Array<Images>
}

const useStyles = makeStyles(theme => ({
  gridList: {
    maxWidth: '100%',
    height: 'auto'
  },
  images: {
    cursor: 'pointer',
    width: '100%'
  }
}))

const ListImages: React.FC<ListImagesProps> = ({ props }) => {
  const classes = useStyles()

  return (
    <ContentMenu>
      <GridList  cellHeight={100} cols={3} className={classes.gridList}>
        {props.map(item => (
          <GridListTile key={item.id}>
            <img className={classes.images} src={item.url} alt={item.name} />
          </GridListTile>
        ))}
      </GridList>
    </ContentMenu>
  )
}

export default ListImages
