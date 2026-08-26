import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 52px;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

const NavBrand = styled(Link)`
  font-size: 0.95rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.ink};
  letter-spacing: -0.02em;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.15rem;
  overflow-x: auto;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const NavItem = styled.li`
  flex-shrink: 0;
`;

const navLinkStyle = `
  text-decoration: none;
  font-size: 0.85rem;
  padding: 0.45rem 0.7rem;
  border-radius: 8px;
  white-space: nowrap;
  display: block;
`;

const NavAnchor = styled.a`
  ${navLinkStyle}
  color: ${({ theme }) => theme.colors.gray};

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
  }
`;

const NavRouteLink = styled(Link)`
  ${navLinkStyle}
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.ink : theme.colors.gray)};
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '400')};

  &:hover {
    color: ${({ theme }) => theme.colors.ink};
  }
`;

const sections = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'speaking', label: 'Speaking' },
  { id: 'writing', label: 'Writing' },
  { id: 'book', label: 'Book' },
  { id: 'recognition', label: 'Recognition' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <NavWrapper>
      <NavInner>
        <NavBrand to="/">Imaya Kumar</NavBrand>
        <NavList>
          {sections.map((s) => (
            <NavItem key={s.id}>
              <NavAnchor href={`${location.pathname === '/' ? '' : '/'}#${s.id}`}>
                {s.label}
              </NavAnchor>
            </NavItem>
          ))}
          <NavItem>
            <NavRouteLink to="/resume" $isActive={location.pathname === '/resume'}>
              Resume
            </NavRouteLink>
          </NavItem>
        </NavList>
      </NavInner>
    </NavWrapper>
  );
};

export default Navbar;
