import { useState } from "react"
import styled from "styled-components"
import colors from "../../utils/style/colors"
import vectorUp from "../../assets/vectorUp.png"
import vectorDown from "../../assets/vectorDown.png"


const CollapseWrapper = styled.div`
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
`

const CollapseAccordion = styled.div`
width: 1023px;
`
const CollapseItem = styled.div`
margin-top: 40px;
`
const CollapseTitleButton = styled.div`
font-size: 24px;
font-weight: 500;
color: #FFFFFF;
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

`

const CollapseContent = styled.div`
background-color: ${colors.secondary};
color: ${colors.primary};
font-weight: 400;
font-size: 24px;
padding: 30px 18px 18px 18px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;

`

export default function Collapse({ title, content }){
    const [show, setShow] = useState(false)
    
    return (
        <div>
            <CollapseWrapper>
                <CollapseAccordion>
                    <CollapseItem>   
                        <CollapseTitleButton 
                        onClick={()=>setShow(!show)}>{title}
                        <img src={ show ? vectorDown : vectorUp} alt="flèche"/>
                        </CollapseTitleButton>

                        {
                            show ?
                            <CollapseContent>
                                {content}
                            </CollapseContent> : null
                        }

                    </CollapseItem>
                </CollapseAccordion>
            </CollapseWrapper>
        </div>
    )
}

