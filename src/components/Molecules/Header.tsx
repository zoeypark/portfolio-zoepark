import ModeButton from "../Atoms/Buttons/ModeButton";
import TranslationButton from "../Atoms/Buttons/TranslationButton";
import {ReactComponent as Logo} from "../../assets/images/portfolioLogo.svg";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
const StyledDiv = styled.div`
  display: flex;
  gap: 3rem;
  > button {
    all: unset;
    cursor: pointer;
    font-family: 'QueensThinItalic';
    font-size: ${props => props.theme.colors.white};
    :hover {
      text-decoration: underline;
    }
  } 
`

export const MainHeader = () => {
  return (
    <>
      <HeaderWrapper>
        <Logo/>
        <StyledDiv>
          <ModeButton />
          <button>menu</button>
        </StyledDiv>
      </HeaderWrapper>
    </>
  )
}

export const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Logo/>
        <StyledDiv>
          {/*TranslationButton은 main page 제외한 나머지 페이지의 헤더에 적용*/}
          <TranslationButton/>          
          <ModeButton />
          <button>menu</button>
        </StyledDiv>
      </HeaderWrapper>
    </>
  )
}
