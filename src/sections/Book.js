import React from 'react';
import styled from 'styled-components';
import SectionHeading from '../components/SectionHeading';

const Section = styled.section`
  padding: 2.5rem 2rem 4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bandBackground};

  @media (max-width: 780px) {
    padding: 2.25rem 1.25rem 3rem;
  }
`;

const Inner = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 210px;
  gap: 3rem;
  align-items: start;
  margin-bottom: 3rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }
`;

const CoverLink = styled.a`
  display: block;

  @media (max-width: 700px) {
    order: -1;
    width: 150px;
    margin: 0 auto;
  }
`;

const Cover = styled.img`
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 18px 36px rgba(26, 26, 24, 0.18);
  display: block;
`;

const Tagline = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-style: italic;
  font-size: 1.3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.ink};
  margin: 0 0 1.5rem 0;
  line-height: 1.5;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.75rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: baseline;
  gap: 0.65rem;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.inkSoft};

  &::before {
    content: '—';
    color: ${({ theme }) => theme.colors.accentGold};
    font-weight: 700;
  }
`;

const BuyButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.accentGold};
  color: #ffffff;
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: 700;
  font-size: 0.88rem;
  padding: 0.8rem 1.6rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  text-decoration: none;
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 22px rgba(169, 121, 44, 0.3);
  }
`;

const DescParagraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.98rem;
  line-height: 1.85;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin: 0 0 1.1rem 0;
  max-width: 760px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ChapterHeading = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grayLight};
  margin: 2.5rem 0 1rem 0;
`;

const ChapterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ChapterRow = styled.div`
  display: flex;
  gap: 0.85rem;
  align-items: baseline;
  padding: 0.65rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ChapterNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  color: ${({ theme }) => theme.colors.accentGold};
  flex-shrink: 0;
`;

const ChapterName = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.ink};
  margin: 0;
  line-height: 1.45;
`;

const chapters = [
  'Understanding Resilience Concepts',
  'Implementing Resilient Compute and Auto Scaling',
  'Securing and Backing Up Critical Data',
  'Orchestrating Graceful Degradation',
  'Exploring AWS Shared Responsibility',
  'Learning AWS Well Architected Principles for Resiliency',
  'Architecting Fault Tolerant Applications',
  'Resiliency Considerations for Serverless Apps',
  'Using Containers to Improve Resiliency',
  'Resilient Architectures Across Regions',
  'Resilient Architecture Examples',
  'Observability, Auditing and Continuous Improvements',
  'Chaos Engineering Testing to Find Application Defects',
  'Disaster Recovery Planning and Testing',
  'AWS Resiliency Services',
];

const amazonLink = 'https://www.amazon.com/Building-Resilient-Architectures-AWS-cost-efficient/dp/B0DKNLVTDV';

const Book = () => (
  <Section id="book">
    <Inner>
      <SectionHeading eyebrow="Published Work" title="Building Resilient Architectures on AWS" />

      <TopRow>
        <div>
          <Tagline>"Your definitive guide to designing systems that never fail."</Tagline>
          <FeatureList>
            <FeatureItem>15 comprehensive chapters, enterprise-grade depth</FeatureItem>
            <FeatureItem>Practical fault-tolerance &amp; auto-scaling patterns</FeatureItem>
            <FeatureItem>Chaos engineering, disaster recovery &amp; SLA design</FeatureItem>
            <FeatureItem>Real-world observability &amp; continuous improvement</FeatureItem>
          </FeatureList>
          <BuyButton href={amazonLink} target="_blank" rel="noopener noreferrer">
            Buy on Amazon &rarr;
          </BuyButton>
        </div>
        <CoverLink href={amazonLink} target="_blank" rel="noopener noreferrer">
          <Cover src="/images/book-cover.jpg" alt="Building Resilient Architectures on AWS" />
        </CoverLink>
      </TopRow>

      <DescParagraph>
        A comprehensive guide to designing cost-efficient, scalable, and fault-tolerant systems on Amazon Web Services. This book provides practical insights into building cloud architectures that can withstand failures and continue operating effectively.
      </DescParagraph>
      <DescParagraph>
        Each chapter takes you deeper into the architectural thinking required to build production systems that recover from failure automatically, scale elastically, and remain observable under pressure — equipping you to design resilient solutions across any cloud workload.
      </DescParagraph>

      <ChapterHeading>Table of Contents</ChapterHeading>
      <ChapterGrid>
        {chapters.map((chapter, index) => (
          <ChapterRow key={chapter}>
            <ChapterNumber>{String(index + 1).padStart(2, '0')}</ChapterNumber>
            <ChapterName>{chapter}</ChapterName>
          </ChapterRow>
        ))}
      </ChapterGrid>
    </Inner>
  </Section>
);

export default Book;
