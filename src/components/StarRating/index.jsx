import styled from "styled-components"
import starActive  from "../../assets/starActive.png"
import starInActive from "../../assets/starInActive.png"
import "../../utils/style/styles.css"

const StarRatingImg = styled.img`
width: 24.75px;
height: 24px;

@media (width <= 480px) {
    width: 13.41px;
    height: 13px;
}
`

export default function StarRating({ dataRating }){
    const fullStars = Array(5).fill(starActive)
    const emptyStars = Array(5).fill(starInActive)

    let rating = dataRating

   
    return (
            <div className="starBlock">
                {
                fullStars.slice(5-rating).map((fullStars, index) => {
                    return <div key={index} className="starContainer"><StarRatingImg key={fullStars.toString()} src={fullStars} alt="étoile pleine"/></div>
                })
                }
                {
                emptyStars.slice(rating).map((emptyStars, index) => {
                    return <div key={index} className="starContainer"><StarRatingImg key={fullStars.toString()} src={emptyStars} alt="étoile vide"/></div>
                })
                }
            </div>
        )
}