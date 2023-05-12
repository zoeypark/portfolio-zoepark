import React from "react";
import MainNav from "../Molecules/MainNav";
import { MainHeader } from "../Molecules/Header";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Main = () => {
  return (
    <>
      <Container>
        <MainHeader />
        <MainNav />
      </Container>
    </>
  )
}

export default Main;