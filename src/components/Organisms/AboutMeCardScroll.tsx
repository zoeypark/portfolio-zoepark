import styled from "styled-components";
import AboutMeCard from "../Molecules/AboutMeCard"

const ScrollWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 8rem;
  justify-content: center;
  align-items: center;
` 

const AboutMeCardScroll = () => {
  return (
    <>
      <ScrollWrapper>
        <ul>
          {/*map으로 li요소 돌려서 컴포넌트 여러개 표시하기*/}
          <li>
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
    </>
  )
}

export default AboutMeCardScroll;