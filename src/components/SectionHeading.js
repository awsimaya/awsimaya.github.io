import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  margin-bottom: ${({ $tight }) => ($tight ? '1.25rem' : '2rem')};
`;

const Eyebrow = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accentBlue};
  margin: 0 0 0.5rem 0;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.ink};
  letter-spacing: -0.025em;
  line-height: 1.2;
  margin: 0;
`;

const Lead = styled.p`
  font-size: 1rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.inkSoft};
  max-width: 640px;
  margin: 0.9rem 0 0 0;
`;

const SectionHeading = ({ eyebrow, title, lead, tight }) => (
  <Wrap $tight={tight}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <Title>{title}</Title>
    {lead && <Lead>{lead}</Lead>}
  </Wrap>
);

export default SectionHeading;
