import ErrorIllustration from '../../assets/404.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'
import Footer from '../Footer'

const ErrorWrapper = styled.div`
    text-align: center;
    margin-top: 200px;
    margin-bottom: 160px;
`

const ErrorLogo = styled.img`
    width: 597px;
    height: 263px;
`

const Errormessage = styled.p`
    font-size: 36px;
    font-weight: 500;
    line-height: 51.34px;
    color: ${colors.primary};
`

const ErrorLinkHomeReturn = styled(Link)`
    color: ${colors.primary};
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    display: flex;
    justify-content: center;
`

export default function Error(){
    return (
        <div>
        <ErrorWrapper>
            <ErrorLogo src={ErrorIllustration} alt="logo erreur" />
            <Errormessage>Oups! La page que vous demandez n'existe pas.</Errormessage>
        </ErrorWrapper>
        <ErrorLinkHomeReturn to="/">Retourner sur la page d'accueil</ErrorLinkHomeReturn>
        <Footer />
        </div>
        )
}