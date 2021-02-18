import { shade } from 'polished'
import styled from 'styled-components'

export const Menu = styled.div`
  width: 100%;
  display: flex;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondary};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 9999;

  height: 50px;
`

export const ContentMenu = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const ArrowBack = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-content: center;
`

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 0px 24px 0px 0px;

  button {
    height: 35px;
    display: flex;
    background: transparent;
    justify-content: space-around;
    align-items: center;
    border: 0;
    padding: 0 16px;
    color: ${props => props.theme.colors.text};
    width: 130px;

    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#E1E1E6')};
    }
  }
`
