import styled from "styled-components";
import Moon from "../../../assets/images/moon.svg"
import Sun from "../../../assets/images/sun.svg"
import { useState } from "react";

const StyledButtonWrap = styled.div`
  > img {
    cursor: pointer;
  }
`

const ModeButton = () => {
  const [clicked, setClick] = useState<boolean>(false)

  return (
    <>
      <StyledButtonWrap onClick={() => setClick(!clicked)}>
        <img src={clicked ? Sun : Moon} alt=""/>
      </StyledButtonWrap>
    </>
  )
}

export default ModeButton;