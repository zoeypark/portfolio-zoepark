import styled from "styled-components";
import { AboutMeTopMenu} from "../Molecules/AboutMeMenu";
import AboutMeCardScroll from "../Organisms/AboutMeCardScroll";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8rem;
`

const AboutMe = () => {
  return (
    <>
      <Container>
        <AboutMeTopMenu/>
        <AboutMeCardScroll />
      </Container>
    </>
  )
}

export default AboutMe;