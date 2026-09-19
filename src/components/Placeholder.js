import React from 'react';
import styled from 'styled-components';

const Chip = styled.span`
  display: inline-block;
  padding: 0.05em 0.5em;
  border-radius: 5px;
  background: rgba(169, 121, 44, 0.14);
  border: 1px dashed ${({ theme }) => theme.colors.accentGold};
  color: ${({ theme }) => theme.colors.accentGold};
  font-weight: 600;
  font-size: 0.85em;
  line-height: 1.3;
  white-space: nowrap;
`;

const Block = styled.div`
  border: 1px dashed ${({ theme }) => theme.colors.accentGold};
  background: rgba(169, 121, 44, 0.06);
  border-radius: ${({ theme }) => theme.radii.card};
  padding: 0.95rem 1.15rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.86rem;
  font-style: italic;
  line-height: 1.65;
  color: ${({ theme }) => theme.colors.accentGold};
`;

// Inline chip for a single missing number/word inside a stat or sentence.
export const Placeholder = ({ children }) => <Chip>{children}</Chip>;

// Larger callout for a missing paragraph, story, or example.
export const PlaceholderBlock = ({ children }) => <Block>{children}</Block>;
