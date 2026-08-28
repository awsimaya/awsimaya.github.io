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

const SubLabel = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grayLight};
  margin: 0 0 0.75rem 0;
`;

const ListBlock = styled.div`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const dotnetVideos = [
  { href: 'https://www.youtube.com/watch?v=EF1NES9BX8c', title: 'Using AWS Lambda Layers in .NET' },
  { href: 'https://www.youtube.com/watch?v=-6k-TFV3M8o', title: '.NET, IoT, and Lambda' },
  { href: 'https://www.youtube.com/watch?v=yBmxRdB--4Q', title: 'Amazon Translate Service through .NET' },
  { href: 'https://www.youtube.com/watch?v=Q1RWpB2juKI', title: 'Perform Sentiment Analysis on a Text' },
];

const articles = [
  { href: 'https://thenewstack.io/no-more-fomo-efficiency-in-slo-driven-monitoring/', title: 'SLO driven monitoring', meta: 'The NewStack' },
  { href: 'https://www.dataversity.net/observability-maturity-model-a-framework-to-enhance-monitoring-and-observability-practices/', title: 'Observability Maturity Model: A Framework to Enhance Monitoring and Observability Practices', meta: 'Dataversity' },
  { href: 'https://techstrong.tv/videos/interviews/sloconf-kit-merker-nobl9', title: 'Panel discussion on SLO monitoring', meta: 'Techstrong.tv' },
  { href: 'https://www.youtube.com/watch?v=Yq3A85qHtnc', title: 'FOMO vs SLO driven monitoring', meta: 'SLO Conf' },
  { href: 'https://hopin.com/events/developerweek-global-cloud-2021#speakers', title: 'Observability in the Cloud', meta: 'Developerweek conference' },
];

const Writing = () => (
  <Section id="writing">
    <Inner>
      <SectionHeading eyebrow="Content & Publications" title="Writing & Developer Content" />

      <ListBlock>
        <SubLabel>.NET Development on AWS — Videos</SubLabel>
        <IndexList items={dotnetVideos} />
      </ListBlock>

      <ListBlock>
        <SubLabel>Editorial &amp; Press</SubLabel>
        <IndexList items={articles} />
      </ListBlock>
    </Inner>
  </Section>
);

export default Writing;
