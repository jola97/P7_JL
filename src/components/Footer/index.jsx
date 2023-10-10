import logoFooter from '../../assets/logoFooter.png'
import styled from 'styled-components'

const FooterLogo = styled.img`
width: 122px;    
height: 39.44px;
`
const FooterContainer = styled.div`
width: 100vw;    
height: 209px;
background-color: #000000;
display: flex;
justify-content: end;
flex-direction: column;
align-items: center; 
margin-top: 50px;
position: absolute;
margin-top: 20%;

@media (width <= 480px) {
    position: relative;
    bottom:0;
    justify-content: center;
}
`

const FooterText = styled.p`
font-weight: 500;
font-size: 24px;
color: #FFFFFF;
line-height: 45.22px;

@media (width <= 480px) {
    font-size: 12px;
}
`


export default function Footer(){

    return (
        <div>
            <FooterContainer>
                <FooterLogo src={logoFooter}/>
                <FooterText>
                    © 2020 Kasa. All rights reserved
                </FooterText>
            </FooterContainer>
        </div>
        )
}