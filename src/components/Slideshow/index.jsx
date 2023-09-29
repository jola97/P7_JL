import styled from "styled-components"
import logements from "../../datas/logements.json"
import { useParams } from "react-router-dom";
import { useState } from "react";
import vectorLeft from"../../assets/vectorLeft.png"
import vectorRight from"../../assets/vectorRight.png"

const SlideshowContainer = styled.div`
    margin-left: 100px;
    margin-right: 100px;
    border-radius: 25px;
    margin-top: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 415px;
    position: relative;
`
const SlideshowImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    object-fit: cover;
`

const ArrowSlideshowLeft = styled.img`
    width: 46.68px;
    height:79.2px;
    //top: 8.4px;
    margin-left:25.96px; 
    position: absolute;
    left: 23px;
    cursor: pointer;
`

const ArrowSlideshowRight = styled.img`
    width: 46.68px;
    height:79.2px;
    //top: 8.4px;
    margin-right:25.96px; 
    position: absolute;
    right: 23px;
    cursor: pointer;
`

const Indicator = styled.span`
    display: flex;
    position: absolute;
    bottom: 1rem;
    color: #FFFFFF;
    font-size: 18px;
    width: 24px;
    height: 32.4px;
    font-weight: 500;
`


export default function Slideshow({ pictures }){

    const { id } = useParams()
    const imgHousing = logements.find((element)=> element.id === id)
    console.log(imgHousing.pictures);
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide(slide === pictures.length -1 ? 0 : slide + 1)  
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? pictures.length - 1 : slide - 1)
    }

    return(
        <div>
            
        <SlideshowContainer>
            <ArrowSlideshowLeft src={vectorLeft} alt=" précédent" onClick={prevSlide}/>
            <SlideshowImg src={pictures[slide]}/>
            <Indicator>
            {(slide + 1)+ "/"+ pictures.length}
            </Indicator>      
            <ArrowSlideshowRight src={vectorRight} alt=" suivant" onClick={nextSlide}/>
        </SlideshowContainer> 
            
        </div>
    )  
}
