import styled from "styled-components";
import AboutMeSideMenu from "../Molecules/AboutMeSideMenu";
import AboutMeCardScroll from "../Organisms/AboutMeCardScroll";

const Container = styled.div`
  display: flex;
  padding-top: 8rem;
  position: relative;
`

const AboutMe = () => {
  return (
    <>
      <Container>
        <AboutMeCardScroll />
        <AboutMeSideMenu/>
      </Container>
    </>
  )
}

export default AboutMe;