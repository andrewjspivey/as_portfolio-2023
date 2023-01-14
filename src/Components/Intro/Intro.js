import React from "react";
import styled from "styled-components";
import media from "../../media";

const IntroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  justify-content: flex-start;
  ${media.tablet`
    /* margin: 0rem 5rem; */
  `};
  ${media.widescreen`
    margin: 0rem 6rem;
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
        I'm a highly motivated and skilled developer from Oakland, CA. I have
        experience in{" "}
        <span style={{ color: "#66FCF1" }}>
          JavaScript, React.js, Node.js, HTML, CSS, Python, Django,
        </span>{" "}
        and many more. I'm eager to learn, and passionate about programming.
      </IntroStatement>
    </IntroWrapper>
  );
};

export default Intro;
