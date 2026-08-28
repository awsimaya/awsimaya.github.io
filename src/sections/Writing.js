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

const PressList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  columns: 2;
  column-gap: 2.5rem;

  @media (max-width: 600px) {
    columns: 1;
  }
`;

const PressItem = styled.li`
  break-inside: avoid;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  a {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.inkSoft};
    font-size: 0.88rem;
    text-decoration: none;
    line-height: 1.5;

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
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

const pressMentions = [
  { href: 'https://dev.to/aws/aws-open-source-newsletter-171-4o49', title: 'AWS Open Source Newsletter #171' },
  { href: 'https://dev.to/aws/aws-open-source-news-and-updates-111-1dj3', title: 'AWS Open Source News and Updates #111' },
  { href: 'https://dev.to/aws/aws-open-source-news-and-updates-no-20-hd3', title: 'AWS Open Source News and Updates #20' },
  { href: 'https://dev.to/aws/aws-open-source-newsletter-146-26bh', title: 'AWS Open Source Newsletter #146' },
  { href: 'https://dev.to/aws/aws-open-source-newsletter-133-ocf', title: 'AWS Open Source Newsletter #133' },
  { href: 'https://dev.to/094459/aws-open-source-news-and-updates-127-56n9', title: 'AWS Open Source News and Updates #127' },
  { href: 'https://dev.to/aws/aws-open-source-news-and-updates-94-3o90', title: 'AWS Open Source News and Updates #94' },
  { href: 'https://dev.to/aws/aws-open-source-news-and-updates-84-4c4e', title: 'AWS Open Source News and Updates #84' },
  { href: 'https://dev.to/aws/aws-open-source-news-and-updates-73-1fh7', title: 'AWS Open Source News and Updates #73' },
  { href: 'https://dev.to/aws/aws-open-source-news-and-updates-72-lj9', title: 'AWS Open Source News and Updates #72' },
  { href: 'https://dev.to/aws/aws-open-source-news-and-updates-70-5bj2', title: 'AWS Open Source News and Updates #70' },
  { href: 'https://dev.to/aws/aws-open-source-news-and-updates-65-27bk', title: 'AWS Open Source News and Updates #65' },
  { href: 'https://dev.to/aws/aws-open-source-news-and-updates-62-ib9', title: 'AWS Open Source News and Updates #62' },
  { href: 'https://dev.to/aws/aws-open-source-news-and-updates-58-p8g', title: 'AWS Open Source News and Updates #58' },
  { href: 'https://dev.to/aws/aws-open-source-news-and-updates-no-49-514c', title: 'AWS Open Source News and Updates #49' },
  { href: 'https://dev.to/aws/aws-open-source-news-and-updates-no-40-4ea', title: 'AWS Open Source News and Updates #40' },
  { href: 'https://dev.to/aws/aws-open-source-news-and-updates-no-39-1hp3', title: 'AWS Open Source News and Updates #39' },
  { href: 'https://dev.to/aws/aws-open-source-news-and-updates-80-477e', title: 'AWS Open Source News and Updates #80' },
  { href: 'https://dev.to/aws/aws-open-source-news-and-updates-113-16a4', title: 'AWS Open Source News and Updates #113' },
  { href: 'https://dev.to/aws/aws-open-source-news-and-updates-55-21eh', title: 'AWS Open Source News and Updates #55' },
  { href: 'https://dev.to/aws/aws-open-source-news-and-updates-5145', title: 'AWS Open Source News and Updates #5145' },
  { href: 'https://o11y.news/2022-05-09/', title: 'Observability News - May 9, 2022' },
  { href: 'https://o11y.news/2021-03-01/#amg-using-identity-providers', title: 'Observability News - March 1, 2021' },
  { href: 'https://o11y.news/2022-05-23/#eks-observability', title: 'Observability News - May 23, 2022' },
  { href: 'https://o11y.news/2021-10-04/#managed-prometheus', title: 'Observability News - October 4, 2021' },
  { href: 'https://o11y.news/2022-12-26/#opentelemetry-for-eks', title: 'Observability News - December 26, 2022' },
  { href: 'https://o11y.news/2021-04-26/#aws-observability-workshop', title: 'Observability News - April 26, 2021' },
  { href: 'https://o11y.news/2021-04-19/#managed-grafana-goes-public', title: 'Observability News - April 19, 2021' },
  { href: 'https://o11y.news/2022-07-18/#slo-monitoring', title: 'Observability News - July 18, 2022' },
  { href: 'https://o11y.news/2021-12-20/#new-managed-grafana-features', title: 'Observability News - December 20, 2021' },
  { href: 'https://o11y.news/2021-09-06/#amazon-managed-grafana-is-ga', title: 'Observability News - September 6, 2021' },
  { href: 'https://o11y.news/2021-12-27/#open-source-o11y', title: 'Observability News - December 27, 2021' },
  { href: 'https://o11y.news/2021-06-21/#on-prem-metrics-for-amp', title: 'Observability News - June 21, 2021' },
  { href: 'https://o11y.news/2021-06-14/#amg-for-hybrid-envs', title: 'Observability News - June 14, 2021' },
  { href: 'https://o11y.news/2021-05-24/#open-source-o11y-at-aws', title: 'Observability News - May 24, 2021' },
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

      <ListBlock>
        <SubLabel>Mentions on 3rd Party Websites</SubLabel>
        <PressList>
          {pressMentions.map((p) => (
            <PressItem key={p.href}>
              <a href={p.href} target="_blank" rel="noopener noreferrer">{p.title}</a>
            </PressItem>
          ))}
        </PressList>
      </ListBlock>
    </Inner>
  </Section>
);

export default Writing;
