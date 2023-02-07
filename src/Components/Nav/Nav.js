import React from "react";
import styled from "styled-components";
import media from "../../media";
import AS from "../../assets/AS.png";
import Andrew_Spivey_Resume_2023 from "../../assets/Andrew_Spivey_Resume_2023.pdf";
import { Link } from "react-scroll";

const RegularNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: nowrap;
  padding: 1rem;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }
`;

const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  padding: 2rem 1.5rem;
  z-index: 10;
  ${media.tablet`
    flex-flow: row nowrap;
    /* padding: 0.75rem 1.5rem; */
  `};
`;

const HamburgerMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  padding: 50px 10px;
  width: 300px;
  height: 100vh;
  background-color: ${({ theme }) => theme.primaryDark};
  box-shadow: ${({ hamburgerOpen, theme }) =>
    hamburgerOpen ? `-10px 0px 30px -15px ${theme.primaryHover}` : "0px"};
  transform: ${({ hamburgerOpen }) =>
    hamburgerOpen ? "translateX(0px)" : "translateX(300px)"};
  transition: transform 0.9s ease-in-out;
  @media (min-width: 767px) {
    display: none;
  }
`;

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  margin: 8px;
  z-index: 10;

  &:focus {
    outline: none;
  }

  @media (min-width: 767px) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.primaryHover};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    @media (min-width: 767px) {
      display: none;
    }

    :first-child {
      transform: ${({ hamburgerOpen }) =>
        hamburgerOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ hamburgerOpen }) => (hamburgerOpen ? "0" : "1")};
      transform: ${({ hamburgerOpen }) =>
        hamburgerOpen ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ hamburgerOpen }) =>
        hamburgerOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

const StyledListItem = styled.li`
  list-style-type: none;
  padding: 0.875rem;
`;

const NavLink = styled.span`
  font-family: "SF Mono", sans-serif;
  font-size: 1rem;
  color: #ccd6f6;
  letter-spacing: 0.0625rem;
  transition: color 0.3s linear;
  ${media.tablet`
  font-size: 0.875rem;
  `};
`;

export const StyledButton = styled.button`
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
  `};
`;

const LogoContainer = styled.div`
  display: flex;
  object-fit: contain;
  width: 48px;
  align-items: center;
  ${media.desktop`
    margin-left: 1rem;
    position: fixed;
  `}
`;

const Logo = styled.img`
  width: 100%;
  cursor: pointer;
`;

export const StyledNumber = styled.span`
  font-family: "SF Mono", sans-serif;
  font-size: 1rem;
  color: ${({ theme }) => theme.primaryHover};
  z-index: 15;
  ${media.tablet`
    padding-right: 0.5rem;
    font-size: 0.875rem;
  `}
`;

const ListItemWrap = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${media.tablet`
    flex-direction: row;
  `}
`;

const Nav = () => {
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false);

  const toggleBurger = () => setHamburgerOpen(!hamburgerOpen);

  return (
    <Menu>
      <LogoContainer>
        <Link
          onClick={toggleBurger}
          activeClass="experience"
          to="top"
          spy={true}
          smooth={true}
          duration={500}
        >
          <Logo src={AS} alt="AS_logo" aria-label="home icon" />
        </Link>
      </LogoContainer>
      <StyledBurger onClick={toggleBurger} hamburgerOpen={hamburgerOpen}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>

      <HamburgerMenu hamburgerOpen={hamburgerOpen}>
        <StyledListItem>
          <ListItemWrap>
            <Link
              onClick={toggleBurger}
              activeClass="about"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              <StyledNumber>01.</StyledNumber>
              <NavLink>ABOUT</NavLink>
            </Link>
          </ListItemWrap>
        </StyledListItem>
        <StyledListItem>
          <ListItemWrap>
            <Link
              onClick={toggleBurger}
              activeClass="experience"
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
            >
              <StyledNumber>02.</StyledNumber>
              <NavLink>EXPERIENCE</NavLink>
            </Link>
          </ListItemWrap>
        </StyledListItem>
        <StyledListItem>
          <ListItemWrap>
            <Link
              onClick={toggleBurger}
              activeClass="projects"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              <StyledNumber>03.</StyledNumber>
              <NavLink>PROJECTS</NavLink>
            </Link>
          </ListItemWrap>
        </StyledListItem>
        <StyledListItem>
          <ListItemWrap>
            <Link
              onClick={toggleBurger}
              activeClass="contact"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <StyledNumber>04.</StyledNumber>
              <NavLink>CONTACT</NavLink>
            </Link>
          </ListItemWrap>
        </StyledListItem>
        <StyledListItem>
          <a
            style={{ color: "#66FCF1" }}
            href={Andrew_Spivey_Resume_2023}
            target="_blank"
            rel="noreferrer"
          >
            <StyledButton>RESUME</StyledButton>
          </a>
        </StyledListItem>
      </HamburgerMenu>

      <RegularNav>
        <StyledListItem>
          <ListItemWrap>
            <Link
              activeClass="about"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <StyledNumber>01.</StyledNumber>
              <NavLink>ABOUT</NavLink>
            </Link>
          </ListItemWrap>
        </StyledListItem>
        <StyledListItem>
          <ListItemWrap>
            <Link
              activeClass="experience"
              to="experience"
              spy={true}
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <StyledNumber>02.</StyledNumber>
              <NavLink>EXPERIENCE</NavLink>
            </Link>
          </ListItemWrap>
        </StyledListItem>
        <StyledListItem>
          <ListItemWrap>
            <Link
              activeClass="projects"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <StyledNumber>03.</StyledNumber>
              <NavLink>PROJECTS</NavLink>
            </Link>
          </ListItemWrap>
        </StyledListItem>
        <StyledListItem>
          <ListItemWrap>
            <Link
              activeClass="contact"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <StyledNumber>04.</StyledNumber>
              <NavLink>CONTACT</NavLink>
            </Link>
          </ListItemWrap>
        </StyledListItem>
        <StyledListItem>
          <a
            style={{ color: "#66FCF1" }}
            href={Andrew_Spivey_Resume_2023}
            target="_blank"
            rel="noreferrer"
          >
            <StyledButton>RESUME</StyledButton>
          </a>
        </StyledListItem>
      </RegularNav>
    </Menu>
  );
};

export default Nav;
