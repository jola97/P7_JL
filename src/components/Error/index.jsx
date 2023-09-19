import '../../assets/404.png'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Error(){
    return (
        <div>
            <h1>Oups! La page que vous demandez n'existe pas.</h1>
        
        <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
        )
}