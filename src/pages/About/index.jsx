import Footer from "../../components/Footer";
import imgBannerAbout from "../../assets/imgBannerAbout.png";
import Collapse from "../../components/Collapse";
import styled from "styled-components";
import "../../utils/style/styles.css";
import mottos from "../../datas/mottos.json"

const CollapseWrapper = styled.div`
  display: flex;
  max-width: 100vw;
  justify-content: center;
  
  @media (width <= 480px) {
    margin-top: 0;
  }
`;

const CollapseAccordion = styled.div`
  width: 1023px;

  @media (width <= 480px) {
    width: 335px;
    margin-top: -45px; 
  }
`;

const CollapseItem = styled.div`
  margin-top: 40px;
  
  @media (width <= 480px) {
    margin-left: 0
    margin-right: 0
    margin-top: 0;
}
`;

const BannerContainerAbout = styled.div`
position: relative;
margin-top: 60px;
margin-left: 100px;
margin-right: 100px;
align-items: center;

@media (width <= 480px) {
  width: 336px;
  height: 255px;
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
}

`

const BannerImgAbout = styled.img`
    width: 100%;
    height: 223px;
    object-fit: cover;
    border-radius: 25px;
    filter: brightness(70%);

    @media (width <= 480px) {
      width: 100%;
    }
`
  

export default function About() {
  return (
    <div>
      <div className="main">
        <BannerContainerAbout>
        <BannerImgAbout src={imgBannerAbout} alt="image" />
        </BannerContainerAbout>

        <CollapseWrapper>
          <CollapseAccordion>
            <CollapseItem>
              {mottos.map((item, index) => (
                
                <Collapse 
                  title={item.title}
                  content={<p className="collapseContent">{item.content}</p>}
                  key={index}
                />
              ))}
            </CollapseItem>
          </CollapseAccordion>
        </CollapseWrapper>

      </div>
      <Footer />
    </div>
  );
}


