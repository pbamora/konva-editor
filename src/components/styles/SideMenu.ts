import styled from 'styled-components'

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary};

  width: 100%;
  max-width: 90px;
`

export const ContentMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.text};

  width: 100%;
  max-width: 320px;
`
