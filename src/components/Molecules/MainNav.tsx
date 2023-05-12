import { NavLink } from "react-router-dom"
import styled from "styled-components";

const MainNavWrap = styled.div`
  > a {
  }
`

const MainNav = () => {
  return (
    <>
      <MainNavWrap>
        <NavLink to='/email'>email</NavLink>
        <NavLink to='/project'>project</NavLink>
        <NavLink to='/contact'>contact</NavLink>
      </MainNavWrap>
    </>
  )
}

export default MainNav;