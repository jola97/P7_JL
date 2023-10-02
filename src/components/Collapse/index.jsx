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
`;

export default function Collapse({ title, content }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <CollapseTitleButton onClick={() => setShow(!show)}>
        {title}
        <img src={show ? vectorUp : vectorDown} alt="flèche" />
      </CollapseTitleButton>

      {show ? <p>{content}</p> : null}
    </div>
  );
}
