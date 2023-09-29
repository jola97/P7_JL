import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from "../../assets/logo.png"
import { StyledLink } from "../../utils/style/Atoms"

const HomeLogo = styled.img`
    width: 210.32px;    
    height: 68px;
`

const NavContainer = styled.nav`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 100px;
    margin-right: 100px;
`

export default function Header(){
    return (
    <NavContainer>
        <Link to="/">
        <HomeLogo src={logo} alt="logo kasa"/>
        </Link>
        <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A propos</StyledLink>
        </nav>
    </NavContainer>
    )
}