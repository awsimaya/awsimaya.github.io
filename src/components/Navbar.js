import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(250, 248, 243, 0.9);
  backdrop-filter: saturate(180%) blur(8px);
  -webkit-backdrop-filter: saturate(180%) blur(8px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
  gap: 1rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

const NavBrand = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-style: italic;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
  letter-spacing: -0.01em;
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.3rem;
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
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 500;
  padding: 0.5rem 0.65rem;
  white-space: nowrap;
  display: block;
  position: relative;
`;

const NavAnchor = styled.a`
  ${navLinkStyle}
  color: ${({ theme }) => theme.colors.gray};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const NavRouteLink = styled(Link)`
  ${navLinkStyle}
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.accent : theme.colors.gray)};
  font-weight: ${({ $isActive }) => ($isActive ? '600' : '500')};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const sections = [
  { id: 'about', label: 'About' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'work', label: 'Work' },
  { id: 'thought-leadership', label: 'Thought Leadership' },
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
