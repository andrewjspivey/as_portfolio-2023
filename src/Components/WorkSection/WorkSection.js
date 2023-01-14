import React from "react";
import styled from "styled-components";
import media from "../../media";
import Project from "../Project/Project";

const WorkContainer = styled.section`
  ${media.tablet`
    padding-top: 1rem;
  `}
  ${media.widescreen`
    margin: 0rem 6rem;
  `};
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem 2rem 0rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  margin: 1rem 0rem;
  color: ${({ theme }) => theme.primaryLight};
`;
const SubHeader = styled.span`
  font-size: 1.375rem;
  font-weight: 300;
  margin: 0.5rem 0rem;
`;

const WorkSection = () => {
  return (
    <WorkContainer>
      <Header>
        <Title>Work</Title>
        <SubHeader>Client Projects and other professional work.</SubHeader>
      </Header>
      <Project />
    </WorkContainer>
  );
};

export default WorkSection;
