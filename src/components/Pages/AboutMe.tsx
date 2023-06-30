import styled from "styled-components";
import {AboutMeSideMenu} from "../Molecules/AboutMeMenu";
import AboutMeCardScroll from "../Organisms/AboutMeCardScroll";

const Container = styled.div`
  display: flex;
  padding-top: 8rem;
`

const AboutMe = () => {
  return (
    <>
      <Container>
        <AboutMeCardScroll />
      </Container>
    </>
  )
}

export default AboutMe;