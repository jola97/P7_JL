import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'

export const StyledLink = styled(Link)`
  padding: 10px 0 10px 15px;
  color: ${colors.primary};
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
  @media(width <= 480px){
    font-size: 12px;
    margin-left: 10px;
    padding: 0;
  }
`