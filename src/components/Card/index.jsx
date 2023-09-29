import styled from "styled-components"
import { Link } from "react-router-dom"
import colors from "../../utils/style/colors";

export const CardContainer = styled.div`
  background-color: ${colors.secondary};
  border-radius: 25px;
  margin-top: 43px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 50px;
  gap: 50px;
  margin-left: 100px;
  margin-right: 100px;
`

const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    width: 350px;
    height: 350px;
    position: relative;
`
const CardImage = styled.img`
  height: 350px;
  width: 350px;
  object-fit: cover;
  align-self: center;
  border-radius: 10px;
    
`
const CardBackgroundGradient = styled.img`
  height: 350px;
  width: 350px;
  border-radius: 10px;
  position: absolute;
  opacity: 0.4;
  background: linear-gradient(#FFFFFF 0%
  , #000000 50%)
`

const CardLabel = styled.span`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 500;
  padding-left: 15px;
  line-height:25.67px;
  position: absolute;
  text-align: left;
  bottom: 20px;
  display: flex;
`

export default function Card({ picture, title, id }){
    return(
        <div>
        <CardWrapper>
          <Link to={`/homeinfo/${id}`}>
            <CardBackgroundGradient /> 
            <CardImage src={picture} alt="image" />
            <CardLabel>{title}</CardLabel>
          </Link>  
        </CardWrapper>
        </div>
        )
}