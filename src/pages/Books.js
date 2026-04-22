import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Page = styled.div`
  animation: ${fadeUp} 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`;

/* ─── Dark Hero ─── */

const Hero = styled.div`
  background: linear-gradient(160deg, #1A1A1C 0%, #2A2A2E 50%, #1C1C2E 100%);
  padding: 5rem 2rem 4.5rem;
  display: flex;
  justify-content: center;
`;

const HeroInner = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 2.5rem;
    text-align: center;
    align-items: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroEyebrow = styled.p`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
  margin: 0 0 1rem 0;
`;

const HeroTitle = styled.h1`
  font-size: clamp(1.9rem, 4vw, 2.9rem);
  font-weight: 800;
  color: #FFFFFF;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin: 0 0 1.1rem 0;
`;

const HeroTagline = styled.p`
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.55);
  font-weight: 400;
  margin: 0 0 2rem 0;
  line-height: 1.65;
  font-style: italic;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2.25rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  @media (max-width: 720px) {
    align-items: center;
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 400;

  &::before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #0071E3;
    flex-shrink: 0;
  }
`;

const BuyButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #FF9500;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.85rem 1.75rem;
  border-radius: 980px;
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: all 0.22s ease;
  box-shadow: 0 4px 20px rgba(255, 149, 0, 0.35);

  &:hover {
    background: #E08600;
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(255, 149, 0, 0.5);
  }
`;

/* ─── 3D Book Cover ─── */

const BookCoverWrapper = styled.div`
  flex-shrink: 0;
  perspective: 1000px;
`;

const BookCoverLink = styled.a`
  display: block;
  text-decoration: none;
`;

const BookCover = styled.img`
  width: 230px;
  border-radius: 6px;
  display: block;
  transform: perspective(1000px) rotateY(-10deg) rotateX(2deg);
  box-shadow:
    24px 28px 80px rgba(0, 0, 0, 0.65),
    8px 8px 0 rgba(0, 0, 0, 0.25),
    -2px -2px 12px rgba(255, 255, 255, 0.04);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s ease;

  &:hover {
    transform: perspective(1000px) rotateY(-4deg) rotateX(1deg) translateY(-6px);
    box-shadow:
      32px 40px 100px rgba(0, 0, 0, 0.7),
      8px 8px 0 rgba(0, 0, 0, 0.2),
      -2px -2px 12px rgba(255, 255, 255, 0.06);
  }
`;

/* ─── Stats Strip ─── */

const StatsStrip = styled.div`
  background: #F5F5F7;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

const StatsInner = styled.div`
  max-width: 900px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const StatCell = styled.div`
  text-align: center;
  padding: 1.25rem 1rem;
  position: relative;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 20%;
    right: 0;
    width: 1px;
    height: 60%;
    background: rgba(0, 0, 0, 0.1);
  }
`;

const StatValue = styled.p`
  font-size: 1.85rem;
  font-weight: 800;
  color: #1D1D1F;
  letter-spacing: -0.04em;
  margin: 0 0 0.25rem 0;
  line-height: 1;
`;

const StatDescription = styled.p`
  font-size: 0.8rem;
  color: #86868B;
  font-weight: 500;
  margin: 0;
`;

/* ─── Description Section ─── */

const DescSection = styled.div`
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  background: #ffffff;
`;

const DescInner = styled.div`
  max-width: 900px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const DescLabel = styled.div``;

const DescEyebrow = styled.p`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0071E3;
  margin: 0 0 0.5rem 0;
`;

const DescTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1D1D1F;
  letter-spacing: -0.03em;
  margin: 0;
  line-height: 1.2;
`;

const DescBody = styled.div``;

const DescParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.82;
  color: #3D3D3F;
  margin: 0 0 1rem 0;

  &:last-child {
    margin-bottom: 0;
  }
`;

/* ─── Chapters Section ─── */

const ChaptersSection = styled.div`
  background: #F5F5F7;
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
`;

const ChaptersInner = styled.div`
  max-width: 900px;
  width: 100%;
`;

const ChapterHeader = styled.div`
  margin-bottom: 2rem;
`;

const ChapterEyebrow = styled.p`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0071E3;
  margin: 0 0 0.5rem 0;
`;

const ChapterTitle = styled.h2`
  font-size: 1.85rem;
  font-weight: 700;
  color: #1D1D1F;
  letter-spacing: -0.035em;
  margin: 0;
`;

const ChapterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.7rem;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ChapterCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 14px;
  padding: 1.1rem 1.15rem;
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.09);
    transform: translateY(-2px);
  }
`;

const ChapterNumber = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: #0071E3;
  flex-shrink: 0;
  background: rgba(0, 113, 227, 0.08);
  border-radius: 6px;
  padding: 0.25rem 0.45rem;
  line-height: 1.4;
  margin-top: 0.05rem;
  letter-spacing: 0.02em;
`;

const ChapterName = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: #1D1D1F;
  margin: 0;
  line-height: 1.45;
`;

/* ─── Bottom CTA ─── */

const CTASection = styled.div`
  background: linear-gradient(160deg, #1A1A1C 0%, #1C1C2E 100%);
  padding: 4rem 2rem;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.03em;
  margin: 0 0 0.75rem 0;
`;

const CTASubtitle = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 2rem 0;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #FF9500;
  color: #ffffff;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.9rem 2rem;
  border-radius: 980px;
  text-decoration: none;
  letter-spacing: -0.01em;
  transition: all 0.22s ease;
  box-shadow: 0 4px 20px rgba(255, 149, 0, 0.35);

  &:hover {
    background: #E08600;
    transform: translateY(-2px);
    box-shadow: 0 10px 32px rgba(255, 149, 0, 0.5);
  }
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

const amazonLink = "https://www.amazon.com/Building-Resilient-Architectures-AWS-cost-efficient/dp/B0DKNLVTDV";

const Books = () => {
  return (
    <Page>

      {/* ── Dark Hero ── */}
      <Hero>
        <HeroInner>
          <HeroContent>
            <HeroEyebrow>Published Work</HeroEyebrow>
            <HeroTitle>Building Resilient<br />Architectures on AWS</HeroTitle>
            <HeroTagline>
              "Your definitive guide to designing systems that never fail."
            </HeroTagline>
            <FeatureList>
              <FeatureItem>15 comprehensive chapters, enterprise-grade depth</FeatureItem>
              <FeatureItem>Practical fault-tolerance &amp; auto-scaling patterns</FeatureItem>
              <FeatureItem>Chaos engineering, disaster recovery &amp; SLA design</FeatureItem>
              <FeatureItem>Real-world observability &amp; continuous improvement</FeatureItem>
            </FeatureList>
            <BuyButton href={amazonLink} target="_blank" rel="noopener noreferrer">
              Buy on Amazon →
            </BuyButton>
          </HeroContent>

          <BookCoverWrapper>
            <BookCoverLink href={amazonLink} target="_blank" rel="noopener noreferrer">
              <BookCover
                src="/images/book-cover.jpg"
                alt="Building Resilient Architectures on AWS"
              />
            </BookCoverLink>
          </BookCoverWrapper>
        </HeroInner>
      </Hero>

      {/* ── Stats Strip ── */}
      <StatsStrip>
        <StatsInner>
          <StatCell>
            <StatValue>15</StatValue>
            <StatDescription>In-depth chapters</StatDescription>
          </StatCell>
          <StatCell>
            <StatValue>AWS</StatValue>
            <StatDescription>Native architecture patterns</StatDescription>
          </StatCell>
          <StatCell>
            <StatValue>100%</StatValue>
            <StatDescription>Practical, production-ready</StatDescription>
          </StatCell>
        </StatsInner>
      </StatsStrip>

      {/* ── Description ── */}
      <DescSection>
        <DescInner>
          <DescLabel>
            <DescEyebrow>About the Book</DescEyebrow>
            <DescTitle>An exciting journey through resilient cloud design</DescTitle>
          </DescLabel>
          <DescBody>
            <DescParagraph>
              A comprehensive guide to designing cost-efficient, scalable, and fault-tolerant systems on Amazon Web Services. This book provides practical insights into building cloud architectures that can withstand failures and continue operating effectively.
            </DescParagraph>
            <DescParagraph>
              Each chapter takes you deeper into the architectural thinking required to build production systems that recover from failure automatically, scale elastically, and remain observable under pressure — equipping you to design resilient solutions across any cloud workload.
            </DescParagraph>
          </DescBody>
        </DescInner>
      </DescSection>

      {/* ── Chapters ── */}
      <ChaptersSection>
        <ChaptersInner>
          <ChapterHeader>
            <ChapterEyebrow>Inside the Book</ChapterEyebrow>
            <ChapterTitle>15 Chapters</ChapterTitle>
          </ChapterHeader>
          <ChapterGrid>
            {chapters.map((chapter, index) => (
              <ChapterCard key={index}>
                <ChapterNumber>{String(index + 1).padStart(2, '0')}</ChapterNumber>
                <ChapterName>{chapter}</ChapterName>
              </ChapterCard>
            ))}
          </ChapterGrid>
        </ChaptersInner>
      </ChaptersSection>

      {/* ── Bottom CTA ── */}
      <CTASection>
        <CTATitle>Ready to build systems that never fail?</CTATitle>
        <CTASubtitle>Available now on Amazon in paperback and Kindle.</CTASubtitle>
        <CTAButton href={amazonLink} target="_blank" rel="noopener noreferrer">
          Get your copy on Amazon →
        </CTAButton>
      </CTASection>

    </Page>
  );
};

export default Books;
