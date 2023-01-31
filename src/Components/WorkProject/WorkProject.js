import React from "react";
import styled from "styled-components";
import media from "../../media";
import { StyledButton } from "../Nav/Nav";
import { TbCaretRight } from "react-icons/tb";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0rem 0rem;
  ${media.tablet`
    flex-direction: row;
    padding: 1rem 0rem;
  `}
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  ${media.tablet`
    width: 40%;
  `}
`;

const StyledImage = styled.img`
  max-width: 100%;
  object-fit: contain;
`;

const Description = styled.div`
  width: 100%;
  align-self: center;
  ${media.tablet`
    width: 50%;
  `};
`;

const TitleWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0rem 0rem 0rem;
  ${media.tablet`
    flex-direction: row;
  `};
`;

const ProjectTitle = styled.span`
  font-size: 1.375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryLight};
  ${media.tablet`
    margin-right: 5px;
  `};
`;

const ProjectCompany = styled.span`
  font-size: 1.375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryHover};
`;

const ProjectDescription = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  margin: 1.25rem 0rem;
  ${media.tablet`
    padding-right: 1rem;
  `}
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const Divider = styled.article`
  width: 100%;
  height: 5px;
  display: block;
  content: "";
  border-radius: 1000px;
  background: ${({ theme }) => theme.primaryLight};
`;

const ListContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  ${media.tablet`
  margin-bottom: 0rem;
  
  `}
`;
const ListItemContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0.5rem 0rem;
  transform: translateX(-5px);
`;

const StyledList = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
  list-style-type: none;
  width: 100%;
`;

const ListItem = styled.li`
  font-size: 1.125rem;
  font-weight: 300;
`;

const IconContainer = styled.div`
  margin-right: 1rem;
`;

const DateTechWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled.span`
  font-size: 1rem;
  font-weight: 200;
  margin-bottom: 1rem;
`;

const Tech = styled.span`
  font-style: italic;
  font-size: 1rem;
`;

const WorkProject = ({ project }) => {
  return (
    <>
      {/* <Divider /> */}
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
              <ListItemContainer>
                <IconContainer>
                  <TbCaretRight color="#66FCF1" size={24} />
                </IconContainer>
                <ListItem>{project.description.fourth}</ListItem>
              </ListItemContainer>
              <ListItemContainer>
                <IconContainer>
                  <TbCaretRight color="#66FCF1" size={24} />
                </IconContainer>
                <ListItem>{project.description.fifth}</ListItem>
              </ListItemContainer>
              <ListItemContainer>
                <IconContainer>
                  <TbCaretRight color="#66FCF1" size={24} />
                </IconContainer>
                <ListItem>{project.description?.sixth}</ListItem>
              </ListItemContainer>
            </StyledList>
          </ListContainer>
          {/* <ButtonContainer>
            <StyledButton>View Details</StyledButton>
          </ButtonContainer> */}
        </Description>
        <ImageContainer>
          <StyledImage src={project.image} />
        </ImageContainer>
      </ProjectContainer>
    </>
  );
};

export default WorkProject;
