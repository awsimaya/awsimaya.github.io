import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
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

const ShowCard = styled.a`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding: 1.75rem 0 2rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  text-decoration: none;
  color: inherit;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PlayIcon = styled.div`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.72rem;
  transition: background 0.18s ease, color 0.18s ease;

  ${ShowCard}:hover & {
    background: ${({ theme }) => theme.colors.accent};
    color: #ffffff;
  }
`;

const ShowBody = styled.div``;

const ShowTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-style: italic;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0 0 0.6rem 0;
  color: ${({ theme }) => theme.colors.ink};

  ${ShowCard}:hover & {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const ShowDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.95rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.inkSoft};
  margin: 0 0 0.85rem 0;
  max-width: 620px;
`;

const ShowMeta = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grayLight};
  margin: 0;
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

const engagements = [
  { href: 'https://www.linkedin.com/posts/imaya_had-a-blast-at-renderatl-render-atlanta-activity-7493991472753594369-bnzO/', title: 'Observability in the AI Era', meta: 'RenderATL 2026', meta2: 'Atlanta, GA' },
  { href: 'https://www.linkedin.com/posts/imaya_observability-awssummit-aws-activity-7479163067075964929-xhxc', title: 'Intelligent Observability: From Complexity to Clarity', meta: 'AWS Summit 2026', meta2: 'Washington, D.C.' },
  { href: 'https://www.youtube.com/watch?v=Z-eo1FMhksg', title: 'Behind the scenes: How AWS drives operational excellence & reliability', meta: 'AWS re:Invent 2025', meta2: 'Las Vegas, NV' },
  { href: 'https://www.youtube.com/watch?v=2h1oaiyQ-oU', title: 'Best practices for end-to-end digital experience monitoring', meta: 'AWS re:Invent 2024', meta2: 'Las Vegas, NV' },
  { href: 'https://www.youtube.com/watch?v=ziyTvW_jkxI', title: 'Operating with AWS open source observability', meta: 'AWS re:Invent 2023', meta2: 'Las Vegas, NV' },
  { href: 'https://www.linkedin.com/posts/imaya_fidelity-aws-observability-activity-7090013116192751616-NecF', title: "Fidelity's observability platform for telemetry", meta: 'AWS Summit 2023', meta2: 'New York' },
  { href: 'https://youtu.be/pVTjCTXwk2I?t=6122', title: 'Monitoring Amazon EMR on EKS workloads using Amazon Managed Service for Prometheus', meta: 'AWS Summit 2023', meta2: 'Washington, D.C.' },
  { href: 'https://youtu.be/LGD52z0LxAA?t=18048', title: 'Operating Open Telemetry Collector for Scale and Resiliency', meta: 'KubeCon 2023', meta2: 'Amsterdam, Netherlands' },
  { href: 'https://www.youtube.com/watch?v=2IJPpdp9xU0&t=591s&pp=ygUYYXdzIHJlaW52ZW50IGltYXlhIGt1bWFy', title: 'Observability the Open Source Way', meta: 'AWS re:Invent 2022', meta2: 'Las Vegas, NV' },
  { href: 'https://www.youtube.com/watch?v=or7uFFyHIX0', title: 'Full-stack observability and application monitoring with AWS', meta: 'AWS Summit 2022', meta2: 'San Francisco, CA' },
  { href: 'https://www.youtube.com/watch?v=GSHtAn5pTO8', title: 'Implementing observability for .NET apps on AWS', meta: 'AWS re:Invent 2021', meta2: 'Las Vegas, NV' },
  { href: 'https://www.youtube.com/watch?v=MZ-4HzOC_ac&t=25191s', title: 'Launching Amazon Managed Service for Prometheus', meta: 'KubeCon EU 2021', meta2: 'Virtual' },
  { href: 'https://www.youtube.com/watch?v=iyHzC6DhRVw&t=1618s', title: 'Observability the Open Source Way', meta: 'AWS re:Invent 2021', meta2: 'Las Vegas, NV' },
  { href: 'https://www.youtube.com/watch?v=_d_9xCfVBTM', title: 'Increase availability with AWS observability solutions', meta: 'AWS re:Invent 2020', meta2: 'Las Vegas, NV' },
  { href: 'https://d1.awsstatic.com/events/reinvent/2019/REPEAT_3_Monitoring_modern_apps_Containers,_microservices,_and_more_MGT308-R3.pdf', title: 'Monitoring modern apps: Containers, microservices, and more', meta: 'AWS re:Invent 2019', meta2: 'Las Vegas, NV' },
  { href: 'https://www.youtube.com/watch?v=75p2ete1Cqo', title: 'Thomson Reuters: How It Hosted .NET App on ECS Using Windows Containers', meta: 'AWS re:Invent 2018', meta2: 'Las Vegas, NV' },
];

const webinars = [
  { href: 'https://www.youtube.com/watch?v=F6V4vscvOeY&t=114s', title: 'CDK Observability Accelerator Deep Dive', meta: 'Containers from the Couch 2023' },
  { href: 'https://www.youtube.com/watch?v=gTXACKl4GiI', title: 'AWS Observability and Nobl9: A Journey to Optimize the Metrics Stack', meta: 'Nobl9 Webinar' },
  { href: 'https://youtu.be/7jMtbCDOIqw?t=854', title: 'Launching EKS Observability Accelerator', meta: 'Containers from the Couch 2022' },
  { href: 'https://www.youtube.com/watch?v=FXBZUtrld3k&t=1285s', title: 'Accelerating Adoption of AWS Open-Source Observability Services', meta: 'AWS Online Tech Talks 2022' },
  { href: 'https://www.youtube.com/watch?v=YlupF_OAGIg', title: 'Implementing Observability with Amazon Managed Open Source Services', meta: 'AWS Online Tech Talk 2021' },
  { href: 'https://youtu.be/KZVemZLExnw?t=1050', title: 'Launching Prometheus metrics support for Container Insights', meta: 'Containers from the Couch 2021' },
  { href: 'https://www.youtube.com/watch?v=Bh71xBQe92I&t=1575s', title: 'Monitoring container workloads with Amazon Managed Service for Prometheus and Grafana', meta: 'Containers from the Couch 2021' },
];

const Speaking = () => (
  <Section id="speaking">
    <Inner>
      <SectionHeading eyebrow="Speaking & Media" title="Talks, Shows & Webinars" />

      <ShowCard href="https://www.youtube.com/playlist?list=PLehXSATXjcQHj8bPSf0uZuQBoxJ7a7ag7" target="_blank" rel="noopener noreferrer">
        <PlayIcon>
          <FontAwesomeIcon icon={faPlay} />
        </PlayIcon>
        <ShowBody>
          <ShowTitle>AWS Cloud Operations Show</ShowTitle>
          <ShowDescription>
            Join me for the AWS Cloud Operations Show where we dive deep into best practices, new features, and expert tips for managing and optimizing your AWS infrastructure.
          </ShowDescription>
          <ShowMeta>Bi-weekly livestream · 25,000+ views · Hosted by Imaya Kumar Jagannathan &amp; Team</ShowMeta>
        </ShowBody>
      </ShowCard>

      <ListBlock>
        <SubLabel>Global Conferences</SubLabel>
        <IndexList items={engagements} />
      </ListBlock>

      <ListBlock>
        <SubLabel>Webinars &amp; Online Events</SubLabel>
        <IndexList items={webinars} />
      </ListBlock>
    </Inner>
  </Section>
);

export default Speaking;
