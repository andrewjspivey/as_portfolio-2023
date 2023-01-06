import React from "react";
import styled from "styled-components";
import media from "../../media";
import Header from "../Header/Header";
import Intro from "../Intro/Intro";

const PageWrapper = styled.div`
  padding: 20px;
  ${media.desktop`
    padding: 2rem 8rem;
  `};
`;

const Home = () => {
  return (
    <PageWrapper>
      <Header />
      <Intro />
    </PageWrapper>
  );
};

export default Home;
