import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  transition: background 0.3s ease;
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 52px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 0.85rem 1.5rem;
    gap: 0.6rem;
  }
`;

const NavBrand = styled(Link)`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.ink};
  letter-spacing: -0.02em;
  text-decoration: none;
  transition: opacity 0.2s ease;
  white-space: nowrap;

  &:hover {
    opacity: 0.6;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.15rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: ${props => props.$isActive ? props.theme.colors.ink : props.theme.colors.gray};
  font-weight: ${props => props.$isActive ? '600' : '400'};
  font-size: 0.9rem;
  padding: 0.45rem 0.8rem;
  border-radius: 8px;
  transition: all 0.18s ease;
  display: block;
  letter-spacing: -0.01em;

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
    background: rgba(0, 0, 0, 0.06);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0.8rem;
    right: 0.8rem;
    bottom: 0.1rem;
    height: 2px;
    border-radius: 1px;
    background: ${({ theme }) => theme.colors.accentBlue};
    opacity: ${props => props.$isActive ? 1 : 0};
    transition: opacity 0.18s ease;
  }
`;

const Navbar = () => {
  const location = useLocation();

  return (
    <NavWrapper>
      <NavInner>
        <NavBrand to="/">Imaya Kumar</NavBrand>
        <NavList>
          <NavItem>
            <NavLink to="/" $isActive={location.pathname === "/"}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/activities" $isActive={location.pathname === "/activities"}>Activities</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/books" $isActive={location.pathname === "/books"}>Book</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/resume" $isActive={location.pathname === "/resume"}>Resume</NavLink>
          </NavItem>
        </NavList>
      </NavInner>
    </NavWrapper>
  );
};

export default Navbar;
