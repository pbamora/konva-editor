import React, { ButtonHTMLAttributes } from 'react'
import { Container } from './IconButton'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const IconButton: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
)

export default IconButton
