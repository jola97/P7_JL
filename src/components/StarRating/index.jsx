import styled from "styled-components"
import starActive  from "../../assets/starActive.png"
import starInActive from "../../assets/starInActive.png"

const StarRatingImg = styled.img`
width: 24.75px;
height: 24px;
`

export default function StarRating({ dataRating }){
    const fullStars = Array(5).fill(starActive)
    const emptyStars = Array(5).fill(starInActive)

    let rating = dataRating

   
    return (
            <div>
                {
                fullStars.slice(5-rating).map((fullStars, index) => {
                    return <span key={index} className="starContainer"><StarRatingImg key={fullStars.toString()} src={fullStars} alt="étoile pleine"/></span>
                })
                }
                {
                emptyStars.slice(rating).map((emptyStars, index) => {
                    return <span key={index} className="starContainer"><StarRatingImg key={fullStars.toString()} src={emptyStars} alt="étoile vide"/></span>
                })
                }
            </div>
        )
}