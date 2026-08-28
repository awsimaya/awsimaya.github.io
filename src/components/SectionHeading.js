import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin-bottom: ${({ $tight }) => ($tight ? '1.5rem' : '2.75rem')};
`;

const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
  margin: 0 0 0.75rem 0;

  &::before {
    content: '';
    display: block;
    width: 28px;
    height: 1px;
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.7rem, 3.4vw, 2.35rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
  letter-spacing: -0.01em;
  line-height: 1.15;
  margin: 0;
`;

const Lead = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.02rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.inkSoft};
  max-width: 640px;
  margin: 1.1rem 0 0 0;
`;

const SectionHeading = ({ eyebrow, title, lead, tight }) => (
  <Wrap $tight={tight}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <Title>{title}</Title>
    {lead && <Lead>{lead}</Lead>}
  </Wrap>
);

export default SectionHeading;
