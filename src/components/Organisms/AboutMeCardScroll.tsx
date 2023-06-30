import styled from "styled-components";
import AboutMeCard from "../Molecules/AboutMeCard"
import { useRef } from "react";
import {AboutMeSideMenu, AboutMeTopMenu} from "../Molecules/AboutMeMenu";

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
        <AboutMeTopMenu/>
        <div>
          <ScrollWrapper>
            <ul>
              {/*map으로 li요소 돌려서 컴포넌트 여러개 표시하기*/}
              <li ref={sectionRefs.aboutme}>
                <AboutMeCard />
              </li>
              <li ref={sectionRefs.education}>
                <AboutMeCard />
              </li>
              <li ref={sectionRefs.experience}>
                <AboutMeCard />
              </li>
              <li>
                <AboutMeCard />
              </li>
              <li>
                <AboutMeCard />
              </li>
            </ul>
          </ScrollWrapper>
          <AboutMeSideMenu/>
        </div>
      </StyledContainer>
    </>
  )
}

export default AboutMeCardScroll;