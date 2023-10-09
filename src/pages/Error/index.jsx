import ErrorIllustration from '../../assets/404.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'
import Footer from '../../components/Footer'
import "../../utils/style/styles.css"

const ErrorWrapper = styled.div`
    text-align: center;
    margin-top: 200px;
    margin-bottom: 160px;
    
    @media (width <= 480px) {
        display: flex;
        flex-direction: column;
        align-items: center; 
      }
`

const ErrorLogo = styled.img`
    width: 597px;
    height: 263px;
    
    @media (width <= 480px) {
        width: 198px;
        height: 99px;  
      }
`

const Errormessage = styled.p`
    font-size: 36px;
    font-weight: 500;
    line-height: 51.34px;
    color: ${colors.primary};
    
    @media (width <= 480px) {
        font-size: 18px;
        line-height: 25.67px;
        width: 260px;
        height: 52px;
        span{
            white-space: nowrap;
        }
      }
`

const ErrorLinkHomeReturn = styled(Link)`
    color: ${colors.primary};
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    display: flex;
    justify-content: center;
    @media (width <= 480px) {
        font-size: 14px;
        
      }
`

export default function Error(){
    return (
        <div>
        <div className='main'>
        <ErrorWrapper>
            <ErrorLogo src={ErrorIllustration} alt="logo erreur" />
            <Errormessage>Oups! La page que <span>vous demandez n'existe pas.</span></Errormessage>
        </ErrorWrapper>
        <ErrorLinkHomeReturn to="/">Retourner sur la page d'accueil</ErrorLinkHomeReturn>
        </div>
        <Footer />
        </div>
        )
}