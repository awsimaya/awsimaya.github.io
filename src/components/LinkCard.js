import React from 'react';
import styled from 'styled-components';

const Card = styled.a`
  display: block;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.card};
  padding: 1.1rem 1.25rem;
  height: 100%;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.ink};
  transition: border-color 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentBlue};
  }
`;

const Title = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
  margin: 0 0 0.4rem 0;
  line-height: 1.4;
  letter-spacing: -0.01em;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Meta = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0 0 0.2rem 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Description = styled.p`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 400;
  margin: 0;
  line-height: 1.5;
`;

const LinkCard = ({ href, title, meta, meta2, description, children }) => (
  <Card
    as={href ? 'a' : 'div'}
    href={href}
    target={href ? '_blank' : undefined}
    rel={href ? 'noopener noreferrer' : undefined}
  >
    {title && <Title>{title}</Title>}
    {meta && <Meta>{meta}</Meta>}
    {meta2 && <Meta>{meta2}</Meta>}
    {description && <Description>{description}</Description>}
    {children}
  </Card>
);

export default LinkCard;
export { Card as LinkCardBase, Title as LinkCardTitle, Meta as LinkCardMeta };
