import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from './colors'

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: ${colors.primary};
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`

/*Banner*/
export const BannerContainer = styled.div`
  position: relative;
  margin-top: 60px;
  margin-left: 100px;
  margin-right: 100px;
  display: flex;
  justify-content: space-evenly;  
  align-items: center;
`

export const BannerImg = styled.img`
    width: 100%;
    height: 223px;
    object-fit: cover;
    border-radius: 25px;
    filter: brightness(70%); 
`

export const TitleBanner = styled.h1`
    font-size:48px;
    font-weight:500;
    color: #FFFFFF; 
    text-align: center ;
    position: absolute;
`