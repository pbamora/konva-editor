import { shade } from 'polished'
import styled, { css } from 'styled-components'

interface ContainerProps {
  isSelected: boolean
}

export const Container = styled.button<ContainerProps>`
  border-radius: none;
  border: 0;
  background: transparent;
  justify-content: center;
  align-items: center;
  color: #e1e1e6;
  transition: color 0.2s;
  left: 0px;

  button {
    border-radius: none;
    border: 0;
    justify-content: center;
    background: transparent;
    transition: color 0.2s;
    color: #e1e1e6;
  }

  &:hover {
    color: ${shade(0.2, '#E1E1E6')};
  }

  p {
    font-size: 10px;
    color: #e1e1e6;
  }
`

export const BackgroundIcon = styled.div<ContainerProps>`
  width: 65px;
  height: 30px;
  padding-top: 15px;
  padding-bottom: 25px;
  justify-content: center;
  text-align: center;
  background-color: #323f52;
  cursor: pointer;

  ${props =>
    props.isSelected === false &&
    css`
      background-color: #3d4b5f;
    `}
`
