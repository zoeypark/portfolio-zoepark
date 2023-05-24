import styled from "styled-components"

const StyledUl = styled.ul`
  position: sticky;
  top: 0rem;
  right: 15%;
  z-index: 100rem;
`

const StyledLi = styled.li`
  :hover {
    text-decoration: underline;
  }
`

const AboutMeSideMenu = () => {
  return (
    <>
      <StyledUl>
        <StyledLi>about me</StyledLi>
        <StyledLi>education</StyledLi>
        <StyledLi>experience</StyledLi>
      </StyledUl>
    </>
  )
}

export default AboutMeSideMenu;