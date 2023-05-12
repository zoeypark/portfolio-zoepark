import { NavLink } from "react-router-dom"
import styled from "styled-components";

const MainNavWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  > li {
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
  }
`

const MainNav = () => {
  return (
    <>
      <MainNavWrap>
        <li>        
          <NavLink to='/aboutme'>
          <div>about me</div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/project'>
            <div>project</div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact'>
            <div>contact</div>
          </NavLink>
        </li>
      </MainNavWrap>
    </>
  )
}

export default MainNav;