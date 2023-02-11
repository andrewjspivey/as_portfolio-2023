import React from "react";
import styled from "styled-components";
import media from "../../media";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

const SideMenuContainer = styled.div`
  display: none;
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 25px;
  right: auto;
  z-index: 10;
  color: ${({ theme }) => theme.primaryLight};
  ${media.tablet`
    display: inline;
  `}
  ${media.desktop`
    left: 50px;
  `}
  ${media.widescreen`
    left: 80px;
  `}
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
  li:first-child {
    transform: translateY(15px);
  }
  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 110px;
    margin: 0px auto;
    background-color: ${({ theme }) => theme.primaryTextColor};
  }
`;

const StyledListItem = styled.li`
  padding: 15px 0px;
`;

const StyledFiGithub = styled(FiGithub)`
  color: #81a7bd;
  &:hover {
    color: #66fcf1;
    transform: translateY(-5px);
  }
  transition: all 0.3s ease-in-out;
`;

const StyledFiLinkedin = styled(FiLinkedin)`
  color: #81a7bd;
  &:hover {
    color: #66fcf1;
    transform: translateY(-5px);
  }
  transition: all 0.3s ease-in-out;
`;

const LeftSideMenu = () => {
  return (
    <SideMenuContainer>
      <StyledList>
        <StyledListItem>
          <a
            href="https://github.com/andrewjspivey"
            target="_blank"
            rel="noreferrer"
          >
            <StyledFiGithub size="1.5rem" />
          </a>
        </StyledListItem>
        <StyledListItem>
          <a
            href="https://www.linkedin.com/in/andrewspivey/"
            target="_blank"
            rel="noreferrer"
          >
            <StyledFiLinkedin size="1.5rem" />
          </a>
        </StyledListItem>
      </StyledList>
    </SideMenuContainer>
  );
};

export default LeftSideMenu;
