import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.button`
  border-radius: none;
  border: 0;
  background: transparent;
  color: ${props => props.theme.colors.text};
  transition: color 0.2s;
  left: 0px;
  padding: 0px 0px 0px 24px;

  &:hover {
    color: ${shade(0.2, '#E1E1E6')};
  }
`
