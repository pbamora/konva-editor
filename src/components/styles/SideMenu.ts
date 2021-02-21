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
`

export const ContentMenu = styled.div`
  display: flex;
  margin-top: 50px;
  background: ${props => props.theme.colors.primary};
  overflow-y: auto;
  background-color: ${props => props.theme.colors.secondary};

  width: 430px;
`
