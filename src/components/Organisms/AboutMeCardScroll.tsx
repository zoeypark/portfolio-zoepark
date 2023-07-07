import styled from "styled-components";
import AboutMeCard from "../Molecules/AboutMeCard"
import { useRef } from "react";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const ScrollWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
` 

const AboutMeCardScroll = () => {

  const sectionRefs = {
    aboutme: useRef<HTMLLIElement>(null),
    education: useRef<HTMLLIElement>(null),
    experience: useRef<HTMLLIElement>(null),
  };

  const scrollToSection = (section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <StyledContainer>
        <div>
          <ScrollWrapper>
            <ul>
              <li ref={sectionRefs.aboutme}>
                <AboutMeCard />
              </li>
            </ul>
          </ScrollWrapper>
        </div>
      </StyledContainer>
    </>
  )
}

export default AboutMeCardScroll;