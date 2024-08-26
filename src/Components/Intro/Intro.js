import React from "react";
import styled from "styled-components";
import media from "../../media";
import { Link } from "react-scroll";
import AndrewSpivey_Resume_2024 from "../../assets/AndrewSpivey_Resume_2024.pdf";

const IntroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 2rem 0rem;
  ${media.tablet`
    margin: 3rem 0rem 8rem 0rem;
  `};
  ${media.desktop`
    margin: 4rem 0rem 10rem 0rem;
  `};
  ${media.widescreen`
    margin: 6rem 0rem 12rem 7rem;
  `};
  @media (min-width: 1500px) {
    margin: 6rem 0rem 12rem 10rem;
  } ;
`;

export const IntroHeading = styled.span`
  color: ${({ theme }) => theme.primaryHover};
  font-family: "SF Mono", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0rem 0rem 1rem 2px;
`;

const IntroName = styled.h2`
  font-family: "Calibre", sans-serif;
  font-weight: 600;
  margin: 0;
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
  color: ${({ theme }) => theme.primaryLight};
`;

const SubHeading = styled.h3`
  font-family: "Calibre", sans-serif;
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
  margin: 5px 0px;
  color: #81a7bd;
  line-height: 0.9;
`;

export const IntroStatement = styled.p`
  font-family: "Calibre", sans-serif;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 300;
  color: #81a7bd;
  line-height: 2rem;
  max-width: 850px;
`;

const ContactMeButton = styled.button`
  outline: none;
  border: 1px solid ${({ theme }) => theme.primaryHover};
  color: ${({ theme }) => theme.primaryHover};
  font-family: "SF Mono", sans-serif;
  background-color: inherit;
  padding: 18px 50px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: rgba(102, 252, 241, 0.2);
  }
  ${media.tablet`
    padding: 0.75rem 1rem;
    width: 250px;
    margin-top: 1rem;
  `};
`;

const Intro = () => {
  return (
    <IntroWrapper>
      <IntroHeading>Hi, I'm</IntroHeading>
      <IntroName>Andrew Spivey,</IntroName>
      <SubHeading>Software Developer.</SubHeading>
      <IntroStatement>
        I'm a highly motivated and skilled Software Developer from Oakland, CA.
        I have experience in{" "}
        <span style={{ color: "#66FCF1" }}>
          JavaScript, React.js, Node.js, HTML, CSS, Python, Django,
        </span>{" "}
        and{" "}
        <a
          style={{ color: "#66FCF1" }}
          href={AndrewSpivey_Resume_2024}
          target="_blank"
          rel="noreferrer"
        >
          many more.
        </a>{" "}
        My goal is to find an awesome company I can deliver business value to
        while continuing to level up my skills and grow as a developer.
      </IntroStatement>
      <Link to="contact" spy={true} smooth={true} duration={500}>
        <ContactMeButton>Contact Me</ContactMeButton>
      </Link>
    </IntroWrapper>
  );
};

export default Intro;
