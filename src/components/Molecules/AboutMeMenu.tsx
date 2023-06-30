import { useRef } from "react";
import styled from "styled-components"

const StyledSideUl = styled.ul`
  position: fixed;
  top: 11rem;
  right: 20%;
  z-index: 100rem;
`

const StyledLi = styled.li`
  > button {
    all: unset;
    :hover {
    cursor: pointer;
    text-decoration: underline;
  }
  }
`

const StyledTopUl = styled.ul`
  display: flex;
  gap: 1rem;
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

export const AboutMeSideMenu: React.FC = () => {

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
      <StyledSideUl>
        <StyledLi onClick={() => scrollToSection('aboutme')}><button>about me</button></StyledLi>
        <StyledLi onClick={() => scrollToSection('education')}><button>education</button></StyledLi>
        <StyledLi onClick={() => scrollToSection('experience')}><button>experience</button></StyledLi>
      </StyledSideUl>
    </>
  )
}

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
      <li onClick={() => scrollToSection('education')}><button>education</button></li>
      <li onClick={() => scrollToSection('experience')}><button>experience</button></li>
    </StyledTopUl>
  </>
)
}