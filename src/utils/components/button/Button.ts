import { shade } from 'polished'
import styled from 'styled-components'

export const Container = styled.button`
  background: ${props => props.theme.colors.primary};
  height: 36px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 0;
  padding: 0 16px;
  color: ${props => props.theme.colors.secondary};

  width: 135px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#495A73')};
  }

`
