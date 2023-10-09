import styled from "styled-components"
import colors from "../../utils/style/colors"

const TagHousingContainer = styled.div`
width: 115px;
height: 25px;
background-color: ${colors.primary};
border-radius: 10px;
margin-top: 20px;
text-align: center;
margin-right: 10px;

@media (width <= 480px) {
    width: 84px;
    height: 18px;
}
` 

const TagHousing = styled.div`
color: #FFFFFF;
padding-top: 3px;
text-align: center;
font-size: 14px;
line-height: 19.96px;
height: 20px;

@media (width <= 480px) {
    font-size: 10px;
    line-height: 12.26px;
}
` 

export default function Tag({ tag }){
    return (
        <div>
            <TagHousingContainer>
            <TagHousing>{tag}</TagHousing>
            </TagHousingContainer>
        </div>
        )
}