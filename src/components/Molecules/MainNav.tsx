import { NavLink } from "react-router-dom"
import styled from "styled-components";

const MainNavWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  > a {
    display: flex;
    > .hoverIcon {
      width: 1.5rem;
      display: none;
    }
    > div {
      color: ${props => props.theme.colors.fontColor};
      font-size: ${props => props.theme.fontSizes.title};
      font-family: 'QueensThinItalic';
      :hover {
        font-family: 'QueensThin';
      }
    }
  }
`

const MainNav = () => {
  return (
    <>
      <MainNavWrap>
        <NavLink to='/email'>
          <div>about me</div>
        </NavLink>
        <NavLink to='/project'>
          <div>project</div>
        </NavLink>
        <NavLink to='/contact'>
          <div>contact</div>
        </NavLink>
      </MainNavWrap>
    </>
  )
}

export default MainNav;