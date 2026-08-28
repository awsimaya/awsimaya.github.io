import React from 'react';
import styled from 'styled-components';
import SectionHeading from '../components/SectionHeading';
import IndexList from '../components/IndexList';

const Section = styled.section`
  padding: 2.5rem 2rem 4rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 780px) {
    padding: 2.25rem 1.25rem 3rem;
  }
`;

const Inner = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

const initiatives = [
  {
    href: 'https://observability.workshop.aws/',
    title: 'AWS Observability Workshop',
    meta: '60,000+ users',
    meta2: '5M+ page views',
  },
  {
    href: 'https://aws-observability.github.io/observability-best-practices/',
    title: 'AWS Observability Best Practices Guide',
    meta: 'Community-maintained',
    meta2: 'Global team',
  },
  {
    href: 'https://aws-samples.github.io/cloud-operations-best-practices/',
    title: 'AWS Cloud Operations Best Practices Guide',
    meta: 'Distributed SA team',
  },
  {
    href: 'https://aws-observability.github.io/terraform-aws-observability-accelerator/',
    title: 'AWS Observability Accelerators',
    meta: 'Terraform & CDK',
    meta2: '30K+ deployments',
  },
  {
    href: 'https://aws-observability.github.io/observability-best-practices/maturity-model/',
    title: 'AWS Observability Maturity Model',
    meta: 'Core framework · 4 GTM initiatives',
  },
];

const Work = () => (
  <Section id="work">
    <Inner>
      <SectionHeading
        eyebrow="Open Source & Community"
        title="Flagship Initiatives"
      />
      <IndexList items={initiatives} />
    </Inner>
  </Section>
);

export default Work;
