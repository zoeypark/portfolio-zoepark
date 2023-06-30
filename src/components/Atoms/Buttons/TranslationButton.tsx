import { useState } from "react";
import styled from "styled-components";

const StyledButtonWrap = styled.button`
  position: absolute;
`

const TranslationButton = () => {
  const [clicked, setClick] = useState<boolean>(false)
  return (
    <>
      <StyledButtonWrap onClick={() => setClick(!clicked)}>
        {clicked ? "eng" : "kor"} 
      </StyledButtonWrap>
    </>
  )
}

export default TranslationButton;