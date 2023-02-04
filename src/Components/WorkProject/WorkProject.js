import React from "react";
import styled from "styled-components";
import media from "../../media";
import { TbCaretRight } from "react-icons/tb";
import ImageSlider from "../ImageSlider/ImageSlider";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0rem 0rem;
  ${media.tablet`
    flex-direction: row;
    padding: 1rem 0rem;
  `}
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  ${media.tablet`
    width: 40%;
  `}
`;

export const Description = styled.div`
  width: 100%;
  align-self: center;
  ${media.tablet`
    width: 60%;
  `};
`;

export const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0rem 0rem 0rem;
  ${media.tablet`
    flex-direction: row;
  `};
`;

export const ProjectTitle = styled.span`
  font-size: 1.375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryLight};
  ${media.tablet`
    margin-right: 5px;
  `};
`;

export const ProjectCompany = styled.span`
  font-size: 1.375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryHover};
`;

export const ProjectDescription = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  margin: 1.25rem 0rem;
  ${media.tablet`
    padding-right: 1rem;
  `}
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const ListContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  ${media.tablet`
  margin-bottom: 0rem;
  
  `}
`;
export const ListItemContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0.5rem 0rem;
  transform: translateX(-5px);
`;

export const StyledList = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
  list-style-type: none;
  width: 100%;
`;

export const ListItem = styled.li`
  font-size: 1.125rem;
  font-weight: 300;
`;

export const IconContainer = styled.div`
  margin-right: 1rem;
`;

export const Date = styled.span`
  font-size: 1rem;
  font-weight: 200;
  margin-bottom: 1rem;
`;

export const Tech = styled.span`
  font-style: italic;
  font-size: 1rem;
`;

const WorkProject = ({ project }) => {
  return (
    <>
      {project && (
        <ProjectContainer>
          <Description>
            <TitleWrap>
              <ProjectTitle>
                {project.title} {project.preposition}{" "}
              </ProjectTitle>
              <ProjectCompany> {project.company}</ProjectCompany>
            </TitleWrap>
            <Date>{project.date}</Date>
            <br />
            <Tech>{project.tech}</Tech>
            <ProjectDescription>{project.description.first}</ProjectDescription>
            <ListContainer>
              <StyledList>
                <ListItemContainer>
                  <IconContainer>
                    <TbCaretRight color="#66FCF1" size={24} />
                  </IconContainer>
                  <ListItem>{project.description.second}</ListItem>
                </ListItemContainer>
                <ListItemContainer>
                  <IconContainer>
                    <TbCaretRight color="#66FCF1" size={24} />
                  </IconContainer>
                  <ListItem>{project.description.third}</ListItem>
                </ListItemContainer>
                {project.description.fourth && (
                  <ListItemContainer>
                    <IconContainer>
                      <TbCaretRight color="#66FCF1" size={24} />
                    </IconContainer>
                    <ListItem>{project.description?.fourth}</ListItem>
                  </ListItemContainer>
                )}
                {project.description.fifth && (
                  <ListItemContainer>
                    <IconContainer>
                      <TbCaretRight color="#66FCF1" size={24} />
                    </IconContainer>
                    <ListItem>{project.description?.fifth}</ListItem>
                  </ListItemContainer>
                )}
                {project.description.sixth && (
                  <ListItemContainer>
                    <IconContainer>
                      <TbCaretRight color="#66FCF1" size={24} />
                    </IconContainer>
                    <ListItem>{project.description?.sixth}</ListItem>
                  </ListItemContainer>
                )}
              </StyledList>
            </ListContainer>
          </Description>
          <ImageContainer>
            <ImageSlider project={project} />
          </ImageContainer>
        </ProjectContainer>
      )}
    </>
  );
};

export default WorkProject;
