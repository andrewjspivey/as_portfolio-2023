import React from "react";
import styled from "styled-components";
import media from "../../media";

const Menu = styled.nav`
  display: flex;
  gap: 10%;
  flex-wrap: nowrap;
  padding-top: 20px;
  ${media.tablet`
    padding-top: 2rem;
  `};
`;

const NavLink = styled.a`
  font-size: 0.875rem;
  color: #5e5e5e;
  letter-spacing: 0.0625rem;
  ${media.tablet`
  font-size: 1.125rem;
  `};
`;

const Nav = () => {
  return (
    <Menu>
      <NavLink>ABOUT</NavLink>
      <NavLink>WORK</NavLink>
      <NavLink>PROJECTS</NavLink>
    </Menu>
  );
};

export default Nav;
