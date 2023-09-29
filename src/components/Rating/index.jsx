import styled from "styled-components"

const RatingContainer = styled.div`
width: 196px;
height: 36px;
line-height: 25.67px;
margin-top: 20px;
`

const RatingImgContainer = styled.div`
width: 36px;
height: 36px;
`

const RatingImg = styled.img`
width: 24.75px;
height: 24px;
`

export default function Rating() {

    return(
        <div>
            <RatingContainer>
                <RatingImgContainer>
                    {/* <RatingImg src={rating} /> */}
                </RatingImgContainer>
            </RatingContainer>
        </div>
        )
}