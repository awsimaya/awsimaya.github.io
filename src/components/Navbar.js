import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  background-color:rgb(231, 232, 234);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;
  
  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: ${props => props.isActive ? 'bold' : '500'};
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  background-color: ${props => props.isActive ? '#e9ecef' : 'transparent'};
  border-bottom: ${props => props.isActive ? '2px solid #007bff' : 'none'};
  
  &:hover {
    background-color:rgb(227, 231, 232);
    color: #007bff;
    transform: translateY(-2px);
  }
`;

const Navbar = () => {
  const location = useLocation();
  
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLink to="/" isActive={location.pathname === "/"}>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/activities" isActive={location.pathname === "/activities"}>Activities</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/books" isActive={location.pathname === "/books"}>Book</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/resume" isActive={location.pathname === "/resume"}>Resume</NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navbar;
