import React from "react";
import styled from "styled-components";
import media from "../../media";

const IntroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 1rem;
  ${media.tablet`
    margin: 2rem 3rem 0rem 3rem;
  `};
  ${media.desktop`
    margin: 2rem 3rem 0rem 3rem;
    padding: 2rem;
  `};
  ${media.widescreen`
    margin: 3rem 6rem 0rem 6rem;
  `};
`;

const IntroHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0.5rem 0rem;
`;

const IntroStatement = styled.p`
  font-weight: 300;
  color: #5e5e5e;
  line-height: 1.5rem;
`;

const Intro = () => {
  return (
    <IntroWrapper>
      <IntroHeading>Hi! 👋🏼 I'm Andrew Spivey.</IntroHeading>
      <IntroHeading>Full-Stack Developer & Software Engineer</IntroHeading>
      <IntroStatement>
        Welcome to my portfolio! I'm a highly motivated and skilled developer
        with experience in JavaScript, React, HTML, CSS, Python, Django, and
        many more. I have a strong foundation in computer science principles and
        a passion for building innovative and intuitive web and mobile
        applications. Throughout my career, I have consistently demonstrated my
        ability to solve complex problems and deliver high-quality solutions in
        a timely manner. Please take a look around to see some of my past
        projects and learn more about my skills and experience. Thank you for
        visiting!
      </IntroStatement>
    </IntroWrapper>
  );
};

export default Intro;
