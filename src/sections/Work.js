import React from 'react';
import styled from 'styled-components';
import SectionHeading from '../components/SectionHeading';

const Section = styled.section`
  padding: 2rem 2rem 3.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 780px) {
    padding: 2rem 1.25rem 2.5rem;
  }
`;

const Inner = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.card};
  padding: 1.1rem 1.25rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.ink};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentBlue};
  }
`;

const CardTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
  margin: 0 0 0.25rem 0;
  line-height: 1.35;
`;

const CardMeta = styled.p`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.accentBlue};
  font-weight: 500;
  margin: 0;
`;

const Arrow = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.grayLine};
  flex-shrink: 0;
`;

const initiatives = [
  {
    href: 'https://observability.workshop.aws/',
    title: 'AWS Observability Workshop',
    meta: '60,000+ users · 5M+ page views · 75+ contributors',
  },
  {
    href: 'https://aws-observability.github.io/observability-best-practices/',
    title: 'AWS Observability Best Practices Guide',
    meta: 'Community-maintained · Global team',
  },
  {
    href: 'https://aws-samples.github.io/cloud-operations-best-practices/',
    title: 'AWS Cloud Operations Best Practices Guide',
    meta: 'Maintained by a distributed SA team',
  },
  {
    href: 'https://aws-observability.github.io/terraform-aws-observability-accelerator/',
    title: 'AWS Observability Accelerators',
    meta: 'Terraform & CDK · Amazon EKS native · 30K+ deployments',
  },
  {
    href: 'https://aws-observability.github.io/observability-best-practices/maturity-model/',
    title: 'AWS Observability Maturity Model',
    meta: 'Core framework for 4 GTM initiatives · Customer success guide',
  },
];

const Work = () => (
  <Section id="work">
    <Inner>
      <SectionHeading
        eyebrow="Open Source & Community"
        title="Flagship Initiatives"
      />
      <Grid>
        {initiatives.map((item) => (
          <Card key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">
            <div>
              <CardTitle>{item.title}</CardTitle>
              <CardMeta>{item.meta}</CardMeta>
            </div>
            <Arrow>&rsaquo;</Arrow>
          </Card>
        ))}
      </Grid>
    </Inner>
  </Section>
);

export default Work;
