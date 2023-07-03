import styled from "styled-components"
import TestImg from "../../assets/images/testimg.jpg"

const CardWrapper = styled.div`
  > img {
    width: 40rem;
    height: 25rem;
  }
  > .content {
    padding: 1rem;
    > div {
      line-height: 130%;
    }
    > .title {
      margin-bottom: 0.5rem;
      font-family: "QueensMediumItalic";
    }
  }
`

const AboutMeCard = () => {
  return (
    <>
      <CardWrapper>
        <img src={TestImg} alt="desc"></img>
        <div className="contents">
          <div className="title"></div>
          <div className="desc"></div>
          <div className="content"></div>
        </div>
      </CardWrapper>
    </>
  )
}

export default AboutMeCard;