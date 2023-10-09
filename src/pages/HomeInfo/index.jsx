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

  @media (width <= 480px) {
    font-size: 18px;
    line-height: 25.67px;
    margin-top: 0;
  }
`;

const LocationHousing = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 25.67px;
  color: ${colors.primary};
  margin-top: 0;

  @media (width <= 480px) {
    font-size: 14px;
    line-height: 19.96px;
  }
`;

const NameHousing = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 25.67px;
  color: ${colors.primary};
  margin-right: 10px;

  @media (width <= 480px) {
    font-size: 12px;
    line-height: 17.11px;
  }
`;

const PictureOwnerHousing = styled.img`
  width: 64px;
  height: 64px;
  line-height: 25.67px;
  border-radius: 50%;

  @media (width <= 480px) {
    width: 32px;
    height: 32px;
  }
`;

const CollapseWrapper = styled.div`
  margin-left: 100px;
  margin-right: 100px;

  @media (width <= 480px) {
    margin: 80px 0 0 0;
  }
`;

const CollapseAccordion = styled.div`
  width: 100%;
`;

const CollapseItem = styled.div`
  margin-top: 40px;
  height: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (width <= 480px) {
    margin: 0;
    flex-direction: column;
    height: unset;
  }
`;

const StarRatingContainer = styled.div`
  width: 196px;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;

  @media (width <= 480px) {
    justify-content: unset;
  }
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
      <div className="main">
        <Slideshow pictures={pictures} />

        <div className="containerTitleLocationNamePicStar">
          <div className="containerTitleLocation">
            <TitleHousing>{title}</TitleHousing>
            <LocationHousing>{location}</LocationHousing>
          </div>

          <div>
            <div className="containerNamePicStar">
              <div className="containerNamePic">
                <NameHousing>{name}</NameHousing>
                <PictureOwnerHousing
                  src={picture}
                  alt="photo du propriétaire de l'appartement"
                />
              </div>
              <StarRatingContainer>
                <StarRating dataRating={rating} />
              </StarRatingContainer>
            </div>
          </div>
        </div>

        <div className="containerTag">
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </div>

        

        <CollapseWrapper>
          <CollapseAccordion>
            <CollapseItem>
              <div className="containerCollapse">
                <Collapse
                  title="Description"
                  content={
                    <div className="containerDescriptionEquipement">
                      {description}
                    </div>
                  }
                />
              </div>
              <div className="containerCollapse">
                <Collapse
                  title="Équipements"
                  content={
                    <div className="containerDescriptionEquipement">
                      {equipments.map((element, index) => (
                        <li key={index}>{element}</li>
                      ))}
                    </div>
                  }
                />
              </div>
            </CollapseItem>
          </CollapseAccordion>
        </CollapseWrapper>
      </div>
      <Footer />
    </div>
  );
}
