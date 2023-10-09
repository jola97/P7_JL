import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/logo.png"
import { StyledLink } from "../../utils/style/Atoms"

const HomeLogo = styled.img`
    width: 210.32px;    
    height: 68px;
    
    @media(width <= 480px){
        width: 145px;    
        height: 47px;
    }
`

const NavContainer = styled.nav`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 200px;
    margin-right: 200px;
    
    @media(width <= 480px){
        margin: 20px 72px 0 72px;
    }
}
`

export default function Header(){
    return (
    <NavContainer>
        <Link to="/">
        <HomeLogo src={logo} alt="logo kasa"/>
        </Link>
        <nav className="navLinkContainer">
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
        </nav>
    </NavContainer>
    )
}