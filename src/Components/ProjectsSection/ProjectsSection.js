import React from "react";
// import styled from "styled-components";
// import media from "../../media";
import WorkProject from "../WorkProject/WorkProject";
import { projectData } from "../../projectData";
import {
  SectionWrapper,
  Header,
  Title,
  TitleNumber,
  SubHeader,
  MobileMenuWrap,
  MenuButton,
} from "../WorkSection/WorkSection";

const ProjectSection = () => {
  const [selectedTab, setSelectedTab] = React.useState(4);
  const [project, setProject] = React.useState(projectData.personalProjectOne);

  const HandleWhichProject = (tabNum) => {
    switch (tabNum) {
      case 4:
        setSelectedTab(4);
        setProject(projectData.personalProjectOne);
        break;
      case 5:
        setSelectedTab(5);
        setProject(projectData.personalProjectTwo);
        break;
      case 6:
        setSelectedTab(6);
        setProject(projectData.personalProjectThree);
        break;

      default:
        break;
    }
  };

  return (
    <SectionWrapper id="projects">
      <Header>
        <Title>
          <TitleNumber>03.</TitleNumber>
          Projects
        </Title>
        <SubHeader>Some things i've built</SubHeader>
      </Header>
      <MobileMenuWrap aria-label="projects menu">
        <MenuButton
          onClick={() => HandleWhichProject(4)}
          selectedTab={selectedTab}
          activeNum={4}
          aria-label="giphy app"
        >
          Giphy
        </MenuButton>
        <MenuButton
          onClick={() => HandleWhichProject(5)}
          selectedTab={selectedTab}
          activeNum={5}
          aria-label="Anime app"
        >
          Anime
        </MenuButton>
        <MenuButton
          onClick={() => HandleWhichProject(6)}
          selectedTab={selectedTab}
          activeNum={6}
          aria-label="Dog Adoption app"
        >
          NBF
        </MenuButton>
      </MobileMenuWrap>
      <WorkProject selectedTab={selectedTab} project={project} />
    </SectionWrapper>
  );
};

export default ProjectSection;
