import styled from "styled-components";
import { Banner, TitleBanner } from "../../components/Banner/index.jsx";
import imgBanner from "../../assets/imgBanner.png"


const BannerContainer = styled.div`
position: relative;
margin-top: 60px;
`

export default function Home() {
  return (
    <div >
      <BannerContainer>
        <Banner src={imgBanner} alt="image" />
        <TitleBanner>Chez vous, partout et ailleurs</TitleBanner>
      </BannerContainer>
    </div>
  );
}

