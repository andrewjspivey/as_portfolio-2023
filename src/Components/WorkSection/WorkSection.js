import React from "react";
import styled from "styled-components";
import media from "../../media";
import WorkProject from "../WorkProject/WorkProject";
import { projectData } from "../../projectData";

export const SectionWrapper = styled.section`
  padding: 2rem 0rem;
  max-width: 900px;
  ${media.tablet`
  margin: 2rem 0rem;
  `}
  ${media.desktop`
  margin: 2rem auto;
  `}
  ${media.widescreen`
    margin: 3rem auto;
  `};
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem 0rem;
`;

export const TitleNumber = styled.span`
  font-family: SF mono, monospace;
  font-size: 1rem;
  padding-right: 0.5rem;
  color: ${({ theme }) => theme.primaryHover};
`;

export const Title = styled.span`
  font-size: 1.875rem;
  font-weight: 500;
  margin: 1rem 0rem;
  color: ${({ theme }) => theme.primaryLight};
`;
export const SubHeader = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
  padding: 0rem 0rem 1rem 0rem;
`;

const MobileMenuWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 25px;
  /* overflow-x: auto; for horizontal scroll if needed in future*/
  /* padding-left: 25px;
  margin-left: -25px; */
`;

const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: ${({ activeNum, selectedTab }) =>
    activeNum === selectedTab ? "#66FCF1" : "#81a7bd"};
  background-color: ${({ activeNum, selectedTab, theme }) =>
    activeNum === selectedTab ? "rgba(102, 252, 241, 0.2)" : "transparent"};
  min-width: 100px;
  width: 33%;
  padding: 5px 15px;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
  border-bottom: ${({ activeNum, selectedTab }) =>
    activeNum === selectedTab ? "2px solid #66FCF1" : "1px solid"};
  text-align: center;
  flex-wrap: nowrap;
  cursor: pointer;
  &:hover {
    background-color: rgba(102, 252, 241, 0.2);
    color: ${({ theme }) => theme.primaryHover};
    transition: background-color 0.3s ease-in-out;
  }
  ${media.tablet`
  padding: 8px 15px;
  `};
`;

const WorkSection = () => {
  const [selectedTab, setSelectedTab] = React.useState(1);
  const [project, setProject] = React.useState(projectData.workProjectOne);

  const HandleWhichProject = (tabNum) => {
    switch (tabNum) {
      case 1:
        setSelectedTab(1);
        setProject(projectData.workProjectOne);
        break;
      case 2:
        setSelectedTab(2);
        setProject(projectData.workProjectTwo);
        break;
      case 3:
        setSelectedTab(3);
        setProject(projectData.workProjectThree);
        break;

      default:
        break;
    }
  };

  return (
    <SectionWrapper id="experience">
      <Header>
        <Title>
          <TitleNumber>02.</TitleNumber>
          Experience
        </Title>
        <SubHeader>Client Projects and other professional work.</SubHeader>
      </Header>
      <MobileMenuWrap aria-label="Work projects menu">
        <MenuButton
          onClick={() => HandleWhichProject(1)}
          selectedTab={selectedTab}
          activeNum={1}
          aria-label="Centripoint"
        >
          Bitwise
        </MenuButton>
        <MenuButton
          onClick={() => HandleWhichProject(2)}
          selectedTab={selectedTab}
          activeNum={2}
          aria-label="East bay recorders"
        >
          East Bay Recorders
        </MenuButton>
        <MenuButton
          onClick={() => HandleWhichProject(3)}
          selectedTab={selectedTab}
          activeNum={3}
          aria-label="Royal Ambulance"
        >
          Royal
        </MenuButton>
      </MobileMenuWrap>
      <WorkProject selectedTab={selectedTab} project={project} />
    </SectionWrapper>
  );
};

export default WorkSection;
