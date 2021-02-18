import { shade } from 'polished'
import styled from 'styled-components'

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => props.theme.colors.primary};

  width: 100%;
  max-width: 65px;

  button {
    border-radius: none;
    border: 0;
    justify-content: center;
    background: transparent;
    color: ${props => props.theme.colors.text};
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#E1E1E6')};
    }
  }

  p {
    font-size: 10px;
  }
`

export const Box = styled.div`
  height: 25px;
`

export const ContentMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary};

  width: 100%;
  max-width: 320px;
`

export const BackgroundIcon = styled.div`
  width: 65px;
  height: 30px;
  padding-top: 5px;
  padding-bottom: 26px;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  background-color: ${props => props.theme.colors.background};

  &::before {
    content: '';
    border-style: solid;
    border-color: #fffa1a transparent;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid;
    /* color: blue; */
    top: 11%;
    position: absolute;
    left: 65px;
  }
`
