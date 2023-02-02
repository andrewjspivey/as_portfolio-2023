import React from "react";
import styled from "styled-components";
import media from "../../media";
import AndrewSpivey_Resume from "../../assets/AndrewSpivey_Resume.pdf";

const IntroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1rem 0rem;
  ${media.desktop`
    margin: 1rem 0rem 2rem 0rem;
  `};
  ${media.widescreen`
    margin: 0px auto;
  `};
`;

export const IntroHeading = styled.span`
  color: ${({ theme }) => theme.primaryHover};
  font-family: "SF Mono", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  margin: 0rem 0rem 1rem 2px;
`;

const IntroName = styled.h2`
  font-family: "Calibre", sans-serif;
  font-weight: 600;
  margin: 0;
  font-size: clamp(40px, 8vw, 80px);
  color: ${({ theme }) => theme.primaryLight};
`;

const SubHeading = styled.h3`
  font-family: "Calibre", sans-serif;
  font-size: clamp(40px, 8vw, 80px);
  margin: 5px 0px;
  color: #81a7bd;
  line-height: 0.9;
`;

export const IntroStatement = styled.p`
  font-family: "Calibre", sans-serif;
  margin-top: 8px;
  font-size: 1.5rem;
  font-weight: 300;
  color: #81a7bd;
  line-height: 2rem;
  max-width: 767px;
`;

const Intro = () => {
  return (
    <IntroWrapper>
      <IntroHeading>Hi, my name is</IntroHeading>
      <IntroName>Andrew Spivey.</IntroName>
      <SubHeading>I bring ideas to life with code.</SubHeading>
      <IntroStatement>
        I'm a highly motivated and skilled
        <span style={{ color: "#66FCF1" }}> Software Developer</span> from
        Oakland, CA. I have experience in{" "}
        <span style={{ color: "#66FCF1" }}>
          JavaScript, React.js, Node.js, HTML, CSS, Python, Django,
        </span>{" "}
        and{" "}
        <a
          style={{ color: "#66FCF1" }}
          href={AndrewSpivey_Resume}
          target="_blank"
          rel="noreferrer"
        >
          many more.
        </a>{" "}
        My goal is to find an awesome company I can deliver business value to
        while continuing to level up my skills and grow as a developer.
      </IntroStatement>
    </IntroWrapper>
  );
};

export default Intro;
