import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.a`
  display: flex;
  align-items: baseline;
  gap: 1rem;
  padding: 0.95rem 0.25rem;
  text-decoration: none;
  color: inherit;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  transition: background 0.18s ease, padding-left 0.18s ease;

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  &:hover {
    background: ${({ theme }) => theme.colors.accentSoft};
    padding-left: 0.6rem;
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 0.15rem 0.75rem;
  }
`;

const Number = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.78rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({ theme }) => theme.colors.accent};
  flex-shrink: 0;
  width: 1.6rem;
`;

const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.02rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
  line-height: 1.4;
  letter-spacing: -0.005em;

  ${Row}:hover & {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Leader = styled.span`
  flex: 1;
  min-width: 1.5rem;
  border-bottom: 1px dotted ${({ theme }) => theme.colors.grayLine};
  transform: translateY(-0.35rem);

  @media (max-width: 600px) {
    display: none;
  }
`;

const MetaGroup = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-shrink: 0;
  text-align: right;

  @media (max-width: 600px) {
    align-items: flex-start;
    text-align: left;
    padding-left: 2.35rem;
    width: 100%;
  }
`;

const Meta = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grayLight};
  white-space: nowrap;
`;

const Arrow = styled.span`
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.accent};
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.18s ease, transform 0.18s ease;

  ${Row}:hover & {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

const pad = (n) => String(n).padStart(2, '0');

const IndexList = ({ items, startIndex = 1 }) => (
  <List>
    {items.map((item, i) => (
      <Row
        key={item.href || item.title}
        href={item.href}
        target={item.href ? '_blank' : undefined}
        rel={item.href ? 'noopener noreferrer' : undefined}
        as={item.href ? 'a' : 'div'}
      >
        <Number>{pad(startIndex + i)}</Number>
        <Title>{item.title}</Title>
        <Leader />
        <MetaGroup>
          {item.meta && <Meta>{item.meta}</Meta>}
          {item.meta2 && <Meta>{item.meta2}</Meta>}
        </MetaGroup>
        <Arrow>&rarr;</Arrow>
      </Row>
    ))}
  </List>
);

export default IndexList;
