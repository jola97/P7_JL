import styled from "styled-components"
import colors from "../../utils/style/colors"

const TagHousingContainer = styled.div`
width: 115px;
height: 25px;
background-color: ${colors.primary};
border-radius: 10px;
margin-top: 20px;
text-align: center;
` 

const TagHousing = styled.div`
color: #FFFFFF;
padding-top: 3px;
text-align: center;
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