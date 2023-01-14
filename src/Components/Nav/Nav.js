import React from "react";
import styled from "styled-components";
import media from "../../media";
import AS from "../../assets/AS.png";

const RegularNav = styled.nav`
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
    padding: 0.75rem 1.5rem;
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

const NavLink = styled.a`
  font-family: "SF Mono", sans-serif;
  font-size: 1rem;
  color: #ccd6f6;
  letter-spacing: 0.0625rem;
  transition: color 0.3s linear;
  ${media.tablet`
  font-size: 0.875rem;
  `};
`;

const StyledButton = styled.button`
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
  ${media.tablet`
    margin-left: 2rem;
  `}
`;

const Logo = styled.img`
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    fill: rgba(102, 252, 241, 0.8);
  }
`;

const StyledNumber = styled.span`
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
    <Menu id="outer-container">
      <LogoContainer>
        <Logo src={AS} alt="AS_logo" aria-label="home icon" />
      </LogoContainer>
      <StyledBurger onClick={toggleBurger} hamburgerOpen={hamburgerOpen}>
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>

      <HamburgerMenu hamburgerOpen={hamburgerOpen}>
        <StyledListItem>
          <ListItemWrap>
            <StyledNumber>01.</StyledNumber>
            <NavLink>WORK</NavLink>
          </ListItemWrap>
        </StyledListItem>
        <StyledListItem>
          <ListItemWrap>
            <StyledNumber>02.</StyledNumber>
            <NavLink>PROJECTS</NavLink>
          </ListItemWrap>
        </StyledListItem>
        <StyledListItem>
          <ListItemWrap>
            <StyledNumber>03.</StyledNumber>
            <NavLink>ABOUT</NavLink>
          </ListItemWrap>
        </StyledListItem>
        <StyledListItem>
          <ListItemWrap>
            <StyledNumber>04.</StyledNumber>
            <NavLink>CONTACT</NavLink>
          </ListItemWrap>
        </StyledListItem>
        <StyledListItem>
          <StyledButton>RESUME</StyledButton>
        </StyledListItem>
      </HamburgerMenu>

      <RegularNav>
        <StyledListItem>
          <ListItemWrap>
            <StyledNumber>01.</StyledNumber>
            <NavLink>WORK</NavLink>
          </ListItemWrap>
        </StyledListItem>
        <StyledListItem>
          <ListItemWrap>
            <StyledNumber>02.</StyledNumber>
            <NavLink>PROJECTS</NavLink>
          </ListItemWrap>
        </StyledListItem>
        <StyledListItem>
          <ListItemWrap>
            <StyledNumber>03.</StyledNumber>
            <NavLink>ABOUT</NavLink>
          </ListItemWrap>
        </StyledListItem>
        <StyledListItem>
          <ListItemWrap>
            <StyledNumber>04.</StyledNumber>
            <NavLink>CONTACT</NavLink>
          </ListItemWrap>
        </StyledListItem>
        <StyledListItem>
          <StyledButton>RESUME</StyledButton>
        </StyledListItem>
      </RegularNav>
    </Menu>
  );
};

export default Nav;
