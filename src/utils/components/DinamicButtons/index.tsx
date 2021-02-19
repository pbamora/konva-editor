import React, { ButtonHTMLAttributes, useCallback, useState } from 'react'
import { Container, BackgroundIcon } from './DinamicButton'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

interface DinamicButtonProps extends ButtonProps {
  selected: boolean
  onSelected: () => void
  text: string
}

const DinamicButton: React.FC<DinamicButtonProps> = ({
  children,
  selected,
  onSelected,
  text
}) => {
  return (
    <>
      <BackgroundIcon isSelected={!selected}>
        <Container isSelected={!selected} type="button" onClick={onSelected}>
          {children}
          <p>{text}</p>
        </Container>
      </BackgroundIcon>
    </>
  )
}

export default DinamicButton
