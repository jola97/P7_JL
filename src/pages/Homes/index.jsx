import { BannerContainer, BannerImg, TitleBanner } from "../../utils/style/Atoms";
import imgBanner from "../../assets/imgBanner.png"
import Card from "../../components/Card/index.jsx";
import { CardContainer } from "../../components/Card/index.jsx";
import logements from "../../datas/logements.json"
import Footer from "../../components/Footer/index.jsx";



export default function Home() {
  return (
    <div >
      <BannerContainer>
        <BannerImg src={imgBanner} alt="image" />
        <TitleBanner>Chez vous, partout et ailleurs</TitleBanner>
      </BannerContainer>
        <CardContainer>
          { logements.map((logement, index) => (
          <Card 
          key={`${logement.name}-${index}`}
          title={logement.title}
          picture={logement.cover}
          id={logement.id}
          />
          ))}
        </CardContainer>
        <Footer/>
    </div>
  );
}

