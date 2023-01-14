import React from "react";
import styled from "styled-components";
import media from "../../media";
import Intro from "../Intro/Intro";
import WorkSection from "../WorkSection/WorkSection";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 1.5rem;
  background-color: #0b0c10;
  ${media.tablet`
    padding: 1rem 4rem;
  `};
  ${media.desktop`
    padding: 1rem 8rem;
  `};
`;

const Home = () => {
  return (
    <PageWrapper>
      <LeftSideMenu />
      <Intro />
      <WorkSection />
    </PageWrapper>
  );
};

export default Home;
