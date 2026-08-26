import React from 'react';
import styled from 'styled-components';
import SectionHeading from '../components/SectionHeading';

const Section = styled.section`
  padding: 2rem 2rem 3.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bandBackground};

  @media (max-width: 780px) {
    padding: 2rem 1.25rem 2.5rem;
  }
`;

const Inner = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const TopRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 2.5rem;
  align-items: start;
  margin-bottom: 2.5rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const CoverLink = styled.a`
  display: block;

  @media (max-width: 700px) {
    order: -1;
    width: 140px;
    margin: 0 auto;
  }
`;

const Cover = styled.img`
  width: 100%;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  display: block;
`;

const Tagline = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.inkSoft};
  font-style: italic;
  margin: 1rem 0 1.25rem 0;
  line-height: 1.6;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.inkSoft};

  &::before {
    content: '·';
    color: ${({ theme }) => theme.colors.accentBlue};
    font-weight: 700;
  }
`;

const BuyButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.accentOrange};
  color: #ffffff;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.radii.pill};
  text-decoration: none;

  &:hover {
    opacity: 0.88;
  }
`;

const DescParagraph = styled.p`
  font-size: 0.97rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin: 0 0 1rem 0;
  max-width: 760px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ChapterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
  margin-top: 1.5rem;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ChapterCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  padding: 0.9rem 1rem;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
`;

const ChapterNumber = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accentBlue};
  flex-shrink: 0;
`;

const ChapterName = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.ink};
  margin: 0;
  line-height: 1.4;
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

      <ChapterGrid>
        {chapters.map((chapter, index) => (
          <ChapterCard key={chapter}>
            <ChapterNumber>{String(index + 1).padStart(2, '0')}</ChapterNumber>
            <ChapterName>{chapter}</ChapterName>
          </ChapterCard>
        ))}
      </ChapterGrid>
    </Inner>
  </Section>
);

export default Book;
