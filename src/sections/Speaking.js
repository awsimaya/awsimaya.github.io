import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import SectionHeading from '../components/SectionHeading';
import LinkCard from '../components/LinkCard';

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

const ShowCard = styled.a`
  display: block;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.card};
  padding: 1.5rem;
  margin-bottom: 2.5rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.ink};
  position: relative;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accentBlue};
  }
`;

const PlayIcon = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  width: 34px;
  height: 34px;
  background: ${({ theme }) => theme.colors.ink};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 0.68rem;
`;

const ShowTitle = styled.h3`
  font-size: 1.05rem;
  margin: 0 0 0.6rem 0;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.ink};
  padding-right: 3rem;
`;

const ShowDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray};
  margin: 0 0 0.75rem 0;
`;

const ShowMeta = styled.p`
  font-size: 0.82rem;
  color: ${({ theme }) => theme.colors.accentBlue};
  font-weight: 500;
  margin: 0;
`;

const SubLabel = styled.p`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grayLine};
  margin: 0 0 1rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
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
        <ShowTitle>AWS Cloud Operations Show</ShowTitle>
        <ShowDescription>
          Join me for the AWS Cloud Operations Show where we dive deep into best practices, new features, and expert tips for managing and optimizing your AWS infrastructure.
        </ShowDescription>
        <ShowMeta>Bi-weekly livestream · 25,000+ views · Hosted by Imaya Kumar Jagannathan &amp; Team</ShowMeta>
      </ShowCard>

      <SubLabel>Global Conferences</SubLabel>
      <Grid>
        {engagements.map((e) => (
          <LinkCard key={e.href} {...e} />
        ))}
      </Grid>

      <SubLabel>Webinars &amp; Online Events</SubLabel>
      <Grid style={{ marginBottom: 0 }}>
        {webinars.map((w) => (
          <LinkCard key={w.href} {...w} />
        ))}
      </Grid>
    </Inner>
  </Section>
);

export default Speaking;
