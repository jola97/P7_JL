import logements from "../../datas/logements.json"
import Slideshow from "../../components/Slideshow";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/colors"
import Tag from "../../components/Tag";
import Rating from "../../components/Rating";
import starActive  from "../../assets/starActive.png"
import starInActive from "../../assets/starInActive.png"

const TitleHousing = styled.h1`
font-weight: 500;
font-size: 36px;
line-height: 51.34px;
color: ${colors.primary};
margin-top: 30px;
`

const LocationHousing = styled.h3`
font-weight: 500;
font-size: 18px;
line-height: 25.67px;
color: ${colors.primary};
`
const NameHousing = styled.p`
font-weight: 500;
font-size: 18px;
line-height: 25.67px;
color: ${colors.primary};

`
const PictureHousing = styled.img`
width: 64px;
height: 64px;
line-height: 25.67px;
border-radius: 50%;
`

const RatingImg = styled.img`
width: 24.75px;
height: 24px;
`

 
export default function HomeInfo(){
    
    const { id } = useParams()
    const housing = logements.find((element)=> element.id === id)
    
    const {
        title,
        cover,
        pictures,
        description,
        host: {name, picture},
        rating,
        location,
        equipments,
        tags,
    } = housing

    console.log("tags",tags);
    
    return (
        <div>
            <Slideshow pictures={pictures}/>

        <TitleHousing>{title}</TitleHousing>
        <LocationHousing>{location}</LocationHousing>

        <NameHousing>{name}</NameHousing>
        <PictureHousing src={picture}/>
        

        {
            tags.map((tag, index) => ( 
              <Tag key={index} tag={tag} />
            ))
        }
        {/* <Rating> */}
            {
            [...Array(5)].map(star => {
                return <img src={starInActive} />
            })
            }
        {/* </Rating> */}
        </div>
        )
}