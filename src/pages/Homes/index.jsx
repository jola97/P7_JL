import { BannerImg, TitleBanner } from '../../utils/style/Atoms'
import imgBanner from '../../assets/imgBanner.png'
import Card from '../../components/Card/index.jsx'
import { CardContainer } from '../../components/Card/index.jsx'
import logements from '../../datas/logements.json'
import Footer from '../../components/Footer/index.jsx'
import '../../utils/style/styles.css'
import styled from 'styled-components'
import Banner from '../../components/Banner'

const BannerContainerHome = styled.div`
  margin-top: 60px;
  margin-left: 100px;
  margin-right: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (width <= 480px) {
    width: 100%;
    margin-top: 0;
    margin-left: 0;
    margin-right: 0;
  }
`

export default function Home() {
  return (
    <div>
      <div className="main">
        <BannerContainerHome>
          <Banner
            backgroundImage={imgBanner}
            title={'Chez vous, partout et ailleurs'}
            alt="image"
          />
        </BannerContainerHome>

        <CardContainer>
          {logements.map((logement, index) => (
            <Card
              key={`${logement.name}-${index}`}
              title={logement.title}
              picture={logement.cover}
              id={logement.id}
            />
          ))}
        </CardContainer>
      </div>
      <Footer />
    </div>
  )
}
