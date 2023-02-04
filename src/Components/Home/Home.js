import React from "react";
import styled from "styled-components";
import media from "../../media";
import Intro from "../Intro/Intro";
import WorkSection from "../WorkSection/WorkSection";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import AboutMe from "../AboutMe/AboutMe";
import ProjectSection from "../ProjectsSection/ProjectsSection";
import Contact from "../Contact/Contact";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 1.5rem;
  background-color: #1d1d1d;
  ${media.tablet`
    padding: 1rem 6rem;
  `};
  ${media.desktop`
    padding: 1rem 9rem;
  `};
`;

const Home = () => {
  return (
    <PageWrapper>
      <LeftSideMenu />
      <Intro />
      <AboutMe />
      <WorkSection />
      <ProjectSection />
      <Contact />
    </PageWrapper>
  );
};

export default Home;
