import { useState } from "react";
import styled from "styled-components";
import colors from "../../utils/style/colors";
import vectorUp from "../../assets/vectorUp.png";
import vectorDown from "../../assets/vectorDown.png";
import "../../utils/style/styles.css"

const CollapseTitleButton = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  background-color: ${colors.primary};
  line-height: 34.22px;
  height: 47px;
  padding-left: 18px;
  padding-right: 18px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 30px;
    
  @media (width <= 480px ) {
        font-size: 13px;
        height: 30px;
}
`;

export default function Collapse({ title, content }) {
  const [show, setShow] = useState(false);

const vectorU = <img src={vectorUp} alt="flèche haut" className="sizeStar"/>
const vectorD = <img src={vectorDown} alt="flèche bas"/>


  return (
    <div>
      <CollapseTitleButton onClick={() => setShow(!show)}>
        {title}
        <div className="arrowContainter">{show ? vectorU : vectorD}</div>
      </CollapseTitleButton>

      {show ? <div>{content}</div> : null}
    </div>
  )
}
