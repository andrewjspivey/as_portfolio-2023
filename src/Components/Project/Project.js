import React from "react";
import styled from "styled-components";
import media from "../../media";
import centripoint_calendar from "../../assets/centripoint_calendar.png";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem 0rem;
  ${media.tablet`
    flex-direction: row;
  `}
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  ${media.tablet`
    width: 60%;
  `}
`;

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  box-shadow: 0 1px 5px #00000008, 0 5px 30px #0000001a;
  border-radius: 5px;
`;

const Description = styled.div`
  width: 100%;
  align-self: center;
  ${media.tablet`
    width: 40%;
  `};
`;

const ProjectTitle = styled.h2`
  font-weight: 500;
`;

const ProjectDescription = styled.p`
  font-size: 1.125rem;
  font-weight: 300;
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
  background: #dddddd;
`;

const Project = () => {
  return (
    <>
      <Divider />
      <ProjectContainer>
        <Description>
          <ProjectTitle>Centripoint</ProjectTitle>
          <ProjectDescription>
            A client software program and schedule tool for companies scheduling
            transportation and care for people with special needs.
          </ProjectDescription>
          <ProjectDescription>
            I contributed to this project as a Developer Apprentice at Bitwise
            Industries.
          </ProjectDescription>
          <ButtonContainer>
            {/* <StyledButton>View Details</StyledButton> */}
          </ButtonContainer>
        </Description>
        <ImageContainer>
          <StyledImage src={centripoint_calendar} />
        </ImageContainer>
      </ProjectContainer>
    </>
  );
};

export default Project;
