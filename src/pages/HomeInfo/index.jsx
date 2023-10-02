import logements from "../../datas/logements.json";
import Slideshow from "../../components/Slideshow";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import Tag from "../../components/Tag";
import StarRating from "../../components/StarRating";
import Collapse from "../../components/Collapse";
import Footer from "../../components/Footer";
import "../../utils/style/styles.css";

const TitleHousing = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 51.34px;
  color: ${colors.primary};
  margin-top: 30px;
  margin-bottom: 0;
`;

const LocationHousing = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 25.67px;
  color: ${colors.primary};
  margin-top: 0;
`;
const NameHousing = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 25.67px;
  color: ${colors.primary};
  margin-right: 10px;
`;
const PictureHousing = styled.img`
  width: 64px;
  height: 64px;
  line-height: 25.67px;
  border-radius: 50%;
`;

const CollapseWrapper = styled.div`
  //display: flex;
  //width: 100vw;
`;

const CollapseAccordion = styled.div`
  width: 1000px;
`;

const CollapseItem = styled.div`
  margin-top: 40px;
  height: 24px;
`;

const StarRatingContainer = styled.div`
  width: 196px;
  height: 36px;
  line-height: 25.67px;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

export default function HomeInfo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const housing = logements.find((element) => element.id === id);

  useEffect(() => {
    if (!housing) {
      navigate("/error");
    }
  }, [housing, navigate]);

  if (!housing) {
    return null;
  }

  const {
    title,
    pictures,
    description,
    host: { name, picture },
    rating,
    location,
    equipments,
    tags,
  } = housing;

  return (
    <div>
      <Slideshow pictures={pictures} />
      <div className="main">
        <div className="containerTitleLocationNamePic">
          <div className="containerTitleLocation">
            <TitleHousing>{title}</TitleHousing>
            <LocationHousing>{location}</LocationHousing>
          </div>
          <div className="containerNamePic">
            <div className="containerName">
              <NameHousing>{name}</NameHousing>
            </div>
            <PictureHousing src={picture} />
          </div>
        </div>
        <div className="containerTagRating">
          <div className="containerTag">
            {tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
          <div>
            <StarRatingContainer>
              <StarRating dataRating={rating} />
            </StarRatingContainer>
          </div>
        </div>

        <div className="containerCollapse">
          <CollapseWrapper>
            <CollapseAccordion>
              <CollapseItem>
                <Collapse
                  title="Description"
                  content={
                    <p className="containerDescription">{description}</p>
                  }
                ></Collapse>
              </CollapseItem>
            </CollapseAccordion>
          </CollapseWrapper>
          <CollapseWrapper>
            <CollapseAccordion>
              <CollapseItem>
                <Collapse
                  title="Équipements"
                  content={equipments.map((element) => (
                    <li className="liContainerEquipement">{element}</li>
                  ))}
                ></Collapse>
              </CollapseItem>
            </CollapseAccordion>
          </CollapseWrapper>
        </div>
      </div>

      <Footer />
    </div>
  );
}
