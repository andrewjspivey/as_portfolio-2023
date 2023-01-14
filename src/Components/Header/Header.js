import React from "react";
import styled from "styled-components";
import media from "../../media";

const HeadingWrapper = styled.header`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0px;
  ${media.tablet`
    padding: 2rem 3rem 0rem 3rem;
  `};
  ${media.desktop`
    padding: 2rem 3rem 0rem 3rem;
  `};
  ${media.widescreen`
    padding: 3rem 6rem 0rem 6rem;
  `};
`;

const ProfileImage = styled.img`
  width: 30%;
  border-radius: 50%;
  ${media.tablet`
    width: 20%;
  `}
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderName = styled.h1`
  color: #ccd6f6;
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  letter-spacing: 0.0625rem;
  ${media.tablet`
    font-size: 2rem;
  `};
`;

const NameUnderline = styled.div`
  height: 6px;
  margin-top: 0.5rem;
  max-width: 25%;
  background-color: #62fad8;
  border-radius: 1000px;
`;

const Header = () => {
  return (
    <HeadingWrapper>
      <NameWrapper>
        <NameUnderline />
      </NameWrapper>
    </HeadingWrapper>
  );
};

export default Header;
