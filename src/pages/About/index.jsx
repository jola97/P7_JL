import Footer from "../../components/Footer";
import { BannerContainer, BannerImg } from "../../utils/style/Atoms";
import imgBannerAbout from "../../assets/imgBannerAbout.png";
import Collapse from "../../components/Collapse";
import styled from "styled-components";
import "../../utils/style/styles.css";

const CollapseWrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

const CollapseAccordion = styled.div`
  width: 1023px;
`;

const CollapseItem = styled.div`
  margin-top: 40px;
`;

export default function About() {
  return (
    <div>
      <BannerContainer>
        <BannerImg src={imgBannerAbout} alt="image" />
      </BannerContainer>

      <CollapseWrapper>
        <CollapseAccordion>
          <CollapseItem>
            <Collapse
              title="Fiabilité"
              content={
                <p className="collapseContent">
                  Les annonces postées sur Kasa garantissent une fiabilité
                  totale. Les photos sont conformes aux logements, et toutes les
                  informations sont régulièrement vérifiées par nos équipes.
                </p>
              }
            />

            <Collapse
              title="Respect"
              content={
                <p className="collapseContent">
                  La bienveillance fait partie des valeurs fondatrices de Kasa.
                  Tout comportement discriminatoire ou de perturbation du
                  voisinage entraînera une exclusion de notre plateforme.
                </p>
              }
            />
            <Collapse
              title="Service"
              content={
                <p className="collapseContent">
                  Nos équipes se tiennent à votre disposition pour vous fournir
                  une expérience parfaite. N'hésitez pas à nous contacter si
                  vous avez la moindre question.
                </p>
              }
            />
            <Collapse
              title="Sécurité"
              content={
                <p className="collapseContent">
                  La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                  que pour les voyageurs, chaque logement correspond aux
                  critères de sécurité établis par nos services. En laissant une
                  note aussi bien à l'hôte qu'au locataire, cela permet à nos
                  équipes de vérifier que les standards sont bien respectés.
                  Nous organisons également des ateliers sur la sécurité
                  domestique pour nos hôtes.
                </p>
              }
            />
          </CollapseItem>
        </CollapseAccordion>
      </CollapseWrapper>

      <Footer />
    </div>
  );
}
