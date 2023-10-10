import styled from 'styled-components'
import '../../utils/style/styles.css'

const BannerImg = styled.img`
  width: 100%;
  height: 223px;
  object-fit: cover;
  border-radius: 25px;
  filter: brightness(70%);

  @media (width <= 480px) {
    width: 100%;
    height: 111px;
  }
`

const TitleBanner = styled.h1`
    font-size:48px;
    font-weight:500;
    color: #FFFFFF; 
    text-align: center ;
    position: absolute;
    top: 21%;
    left: 33%;
    
    @media (width <= 480px) {
      font-size:24px;
      width: 216px;
      text-align: left;
      left: 26px;
      top: 12px;
  }
    }
`

export default function Banner({ backgroundImage, title }) {

  return (
    <div className="containerImg">
      <BannerImg src={backgroundImage} alt="image" />
      <TitleBanner>{title}</TitleBanner>
    </div>
  )
}
