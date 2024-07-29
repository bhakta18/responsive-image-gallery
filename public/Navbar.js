import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Nav>
      <Logo>Gallery</Logo>
      <NavMenu>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavMenu = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.div`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export default NavBar;
