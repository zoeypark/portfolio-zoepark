import { useRef } from "react";
import styled from "styled-components"

const StyledTopUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 4rem;
  padding-bottom: 1rem;
  padding-top: 2rem;
  background-color: #EFEBE6;
  position:sticky;
  top:3rem;
  > li {
    > button {
      all: unset;
      :hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`


export const AboutMeTopMenu: React.FC = () => {

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
    <StyledTopUl>
      <li onClick={() => scrollToSection('aboutme')}><button>about me</button></li>
      <li onClick={() => scrollToSection('experience')}><button>experience</button></li>
      <li onClick={() => scrollToSection('experience')}><button>projects</button></li>
    </StyledTopUl>
  </>
)
}