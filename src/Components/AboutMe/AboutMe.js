import React from "react";
import styled from "styled-components";
import media from "../../media";
import {
  SectionWrapper,
  Title,
  Header,
  TitleNumber,
} from "../WorkSection/WorkSection";
import profilepic from "../../assets/profilepic.png";

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tablet`
  flex-direction: row;
  justify-content: space-between;
  `};
`;

const AboutTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${media.tablet`
    width: 55%;
  `};
`;

const Text = styled.p`
  margin: 0 0 1rem;
`;

const ProfilePicWrap = styled.div`
  width: 100%;
  display: flex;
  ${media.tablet`
    width: 40%;
  `};
`;

const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  --color: ${({ theme }) => theme.primaryHover};
  --border: 5px;
  --offset: 10px;
  --gap: 5px;

  --_c: var(--color) var(--border), #0000 0 calc(100% - var(--border)),
    var(--color) 0;
  --_o: calc(3 * var(--offset));
  padding: calc(var(--gap) + var(--border))
    calc(var(--gap) + var(--border) + var(--offset))
    calc(var(--gap) + var(--border) + var(--offset))
    calc(var(--gap) + var(--border));
  background: linear-gradient(var(--_c)) var(--_o) var(--_o),
    linear-gradient(90deg, var(--_c)) var(--_o) var(--_o);
  background-size: calc(100% - var(--_o)) calc(100% - var(--_o));
  background-repeat: no-repeat;
  transition: 0.5s;
  &:hover {
    background-position: 0px 0px;
    background-size: calc(100% - var(--offset)) calc(100% - var(--offset));
    filter: grayscale(0);
  }
  ${media.tablet`
    width: 300px;
    height: 300px;
  `}
`;

const AboutMe = () => {
  return (
    <SectionWrapper>
      <Header>
        <Title>
          <TitleNumber>01.</TitleNumber>About Me
        </Title>
      </Header>
      <AboutContent>
        <AboutTextWrap>
          <Text>
            Hello, my name is Andrew Spivey
          </Text>
          <Text>
            fjkdlsaj;dj kflsajdlfj asd;lkfja; lsdjk;la djs ka;ls djkk fjfi oehw;
            shfnc mdsn nklj;ja aksdjf il asehf k;ldjf ;aslddi ijals k
          </Text>
          <Text>
            fjkdlsaj;dj kflsajdlfj asd;lkfja; lsdjk;la djs ka;ls djkk fjfi oehw;
            shfnc mdsn nklj;ja aksdjf il asehf k;ldjf ;aslddi ijals k more stuff
            about myself I would like to talk about just testing something here.
          </Text>
          <Text>
            fjkdlsaj;dj kflsajdlfj asd;lkfja; lsdjk;la djs ka;ls djkk fjfi oehw;
            shfnc mdsn nklj;ja aksdjf il asehf k;ldjf ;aslddi ijals k more stuff
            about myself I would like to talk about just testing something here.
          </Text>
        </AboutTextWrap>
        <ProfilePicWrap>
          <StyledImage src={profilepic} alt="profile_pic" />
        </ProfilePicWrap>
      </AboutContent>
    </SectionWrapper>
  );
};

export default AboutMe;
