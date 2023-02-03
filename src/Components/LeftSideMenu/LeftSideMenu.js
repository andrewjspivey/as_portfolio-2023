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
  &::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: ${({ theme }) => theme.primaryLight};
  }
`;

const StyledListItem = styled.li`
  padding: 10px;
`;

const LeftSideMenu = () => {
  return (
    <SideMenuContainer>
      <StyledList>
        <StyledListItem>
          <a href="https://github.com/andrewjspivey">
            <FiGithub size="1.5rem" color="#81a7bd" />
          </a>
        </StyledListItem>
        <StyledListItem>
          <a href="/">
            <FiLinkedin size="1.5rem" color="#81a7bd" />
          </a>
        </StyledListItem>
      </StyledList>
    </SideMenuContainer>
  );
};

export default LeftSideMenu;
