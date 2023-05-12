import React from "react";
import MainNav from "../Molecules/MainNav";
import { MainHeader } from "../Molecules/Header";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 3rem);
  overflow: hidden;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Main = () => {
  return (
    <>
      <Container>
        <MainNav />
      </Container>
    </>
  )
}

export default Main;