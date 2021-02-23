import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles
} from '@material-ui/core'
import { IoExpandOutline } from 'react-icons/io5'
import React from 'react'

const useStyles = makeStyles({
  root: {
    marginBottom: 15,
    background: '#323F52'
  },
  button: {
    color: '#E1E1E6'
  }
})

const ButtonNavigation = () => {
  const [value, setValue] = React.useState(0)

  const classes = useStyles()

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction  label="stories" icon={<IoExpandOutline />} />
      <BottomNavigationAction label="quadrado" icon={<IoExpandOutline />} />
      <BottomNavigationAction label="retangular" icon={<IoExpandOutline />} />
    </BottomNavigation>
  )
}

export default ButtonNavigation
