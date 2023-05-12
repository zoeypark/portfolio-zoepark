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
        <div className="content">
          <div className="title">about me</div>
          <div className="desc">1996년생</div>
          <div>도전, 끈기, 호기심! 현재 서울에 있습니다.</div>
          <div>typescript를 공부 중입니다.</div>
        </div>
      </CardWrapper>
    </>
  )
}

export default AboutMeCard;