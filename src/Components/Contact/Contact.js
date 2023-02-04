import React from "react";
import styled from "styled-components";
import { SectionWrapper } from "../WorkSection/WorkSection";
import { IntroHeading } from "../Intro/Intro";
import { StyledButton } from "../Nav/Nav";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0rem 1rem 0rem;
`;

const ContactText = styled.p`
  font-size: 1.25rem;
  text-align: center;
  max-width: 450px;
  padding-bottom: 1rem;
`;

const LinkContainer = styled.div`
  display: flex;
  margin: 3rem 0rem 0rem 0rem;
  width: 200px;
  justify-content: space-evenly;
  padding-top: 2rem;
`;

const Contact = () => {
  return (
    <ContactWrap id="contact">
      <IntroHeading>04. Contact me</IntroHeading>
      <ContactText>
        I am currently looking for new opportunities. Please don't hesitate to
        reach out with any questions or projects in mind. Or just to say hi!
      </ContactText>
      <a href="mailto:12spivey@gmail.com" target="_blank" rel="noreferrer">
        <StyledButton>EMAIL ME</StyledButton>
      </a>
      <LinkContainer>
        <a
          href="https://www.linkedin.com/in/andrewspivey/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin size="1.5rem" color="#81a7bd" />
        </a>
        <a
          href="https://github.com/andrewjspivey"
          target="_blank"
          rel="noreferrer"
        >
          <FiGithub size="1.5rem" color="#81a7bd" />
        </a>
      </LinkContainer>
    </ContactWrap>
  );
};

export default Contact;
