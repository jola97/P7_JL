import styled from "styled-components"
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
    
    @media (width <= 480px) {
        width: 335px;
        height: 255px;
        margin: 0 0 10px 0;
}
`
const SlideshowImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    object-fit: cover;
    
    @media (width <= 480px) {
        width: 100%;
        height: 100%;
}
`

const ArrowSlideshowLeft = styled.img`
    width: 46.68px;
    height:79.2px;
    margin-left:25.96px; 
    position: absolute;
    left: 23px;
    cursor: pointer;
    
    @media (width <= 480px) {
        width: 11.67px;
        height: 19.8px;
        left: -17.51px;
}
`

const ArrowSlideshowRight = styled.img`
    width: 46.68px;
    height:79.2px;
    margin-right:25.96px; 
    position: absolute;
    right: 23px;
    cursor: pointer;
    
    @media (width <= 480px) {
        width: 11.67px;
        height: 19.8px;
        right: -17.51px;
}
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
    
    @media (width <= 480px) {
        display:none;
}
`


export default function Slideshow({ pictures, index }){
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide(slide === pictures.length -1 ? 0 : slide + 1)  
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? pictures.length - 1 : slide - 1)
    }

    return(
        <div>
           { 
           pictures.length === 1 ? (   
        <SlideshowContainer>
            <SlideshowImg src={pictures[slide]} alt="photo du logement" />    
        </SlideshowContainer> 
           ) : (
        <SlideshowContainer>
           <ArrowSlideshowLeft src={vectorLeft} alt=" précédent" onClick={prevSlide}/>
           <SlideshowImg src={pictures[slide]} />
           <Indicator>
           {(slide + 1)+ "/"+ pictures.length}
           </Indicator>      
           <ArrowSlideshowRight src={vectorRight} alt=" suivant" onClick={nextSlide}/>     
       </SlideshowContainer> 
                ) 
            }
        </div>
    )  
}
