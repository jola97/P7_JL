import logoFooter from '../../assets/logoFooter.png'
import styled from 'styled-components'

const FooterLogo = styled.img`
width: 122px;    
height: 39.44px;
`
const FooterContainer = styled.div`
width: 100%;    
height: 209px;
background-color: #000000;
display: flex;
justify-content: end;
flex-direction: column;
align-items: center; 
margin-top: 50px;
`

const FooterText = styled.p`
font-weight: 500;
font-size: 24px;
color: #FFFFFF;
line-height: 45.22px;
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