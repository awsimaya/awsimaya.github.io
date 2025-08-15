import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Subtitle = styled.h2`
  text-align: left;
  margin-bottom: 1.5rem;
  color: #333;
  font-weight: 600;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: #444;
  text-align: justify;
`;

const SectionDivider = styled.div`
  margin: 3rem 0;
  border-top: 1px solid #eee;
`;

// AWS Cloud Operations Show Card
const ShowCard = styled.a`
  display: block;
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  border-top: 4px solid #FF0000;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle at top right, rgba(255, 0, 0, 0.15), transparent 70%);
    border-radius: 0 0 0 100%;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    background-color: #f0f4f8;
  }
`;

const PlayIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  color: #FF0000;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  ${ShowCard}:hover & {
    transform: scale(1.1);
  }
`;

const ShowTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: #333;
  padding-right: 3rem;
`;

const ShowDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 0.75rem;
`;

const ShowMeta = styled.p`
  font-size: 0.85rem;
  color: #FF0000;
  font-style: italic;
  font-weight: 500;
`;


const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;


// New styled components for Speaking Engagements
const SpeakingCard = styled.a`
  display: block;
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  height: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  border-top: 4px solid #FF8C00;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle at top right, rgba(255, 140, 0, 0.15), transparent 70%);
    border-radius: 0 0 0 100%;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    background-color: #f0f4f8;
  }
`;

const EventTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: #333;
`;

const EventDate = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const EventLocation = styled.p`
  font-size: 0.85rem;
  color: #FF8C00;
  font-style: italic;
  font-weight: 500;
`;

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;


// Styled component for Online Technical Sessions cards
const TechnicalSessionCard = styled.a`
  display: block;
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  height: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  border-top: 4px solid #800080; /* Purple accent color */
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle at top right, rgba(128, 0, 128, 0.15), transparent 70%);
    border-radius: 0 0 0 100%;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    background-color: #f0f4f8;
  }
`;

const TechnicalSessionTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: #333;
`;

const TechnicalSessionDate = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

// Styled component for .NET Development on AWS - Videos cards
const DotNetCard = styled.a`
  display: block;
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  height: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  border-top: 4px solid #008000; /* Green accent color */
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle at top right, rgba(0, 128, 0, 0.15), transparent 70%);
    border-radius: 0 0 0 100%;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    background-color: #f0f4f8;
  }
`;

const DotNetCardTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: #333;
`;

// Styled component for Publications and Public Conferences cards
const PublicationCard = styled.a`
  display: block;
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  height: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  border-top: 4px solid #0066cc; /* Blue accent color moved to the top */
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle at top right, rgba(0, 102, 204, 0.15), transparent 70%);
    border-radius: 0 0 0 100%;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    background-color: #f0f4f8;
  }
`;

const PublicationTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: #333;
`;

const PublicationSource = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

// Styled component for Recognitions and Awards cards
const AwardCard = styled.a`
  display: block;
  background-color: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  height: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  border-top: 4px solid #8B4513; /* Brown accent color */
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle at top right, rgba(139, 69, 19, 0.15), transparent 70%);
    border-radius: 0 0 0 100%;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    background-color: #f0f4f8;
  }
`;

const AwardTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
  color: #333;
`;

const AwardDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const CollapsibleSection = styled.div`
  margin-top: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;


const CollapsibleContent = styled.div`
  padding: 1rem;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.5rem;

  a {
    color: #0056b3;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #003d80;
    }
  }
`;

const Activities = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Container>
      {/* <Title>Activities</Title> */}

      {/* <Subtitle>Summary</Subtitle> */}

      <Paragraph>
        I lead a global team of Specialist Solutions Architects at AWS, driving innovation and excellence in Observability and Cloud Management services.
        As a senior executive, I have built and mentored a worldwide cohort of technical leaders who deliver strategic architectural guidance to AWS customers, enabling them to optimize their digital operations at scale.
        My leadership has been instrumental in creating impactful, enterprise-grade observability solutions that support millions of users and generate significant business value.
      </Paragraph>

      <Paragraph>
        A recognized thought leader in the Observability domain, I regularly contribute to the industry through over <a href="https://aws.amazon.com/search/?searchQuery=imaya+kumar" className="highlighted-link"> 70 published AWS blog articles, </a> co-authored an <a href="https://www.amazon.com/Building-Resilient-Architectures-AWS-cost-efficient/dp/B0DKNLVTDV" className="highlighted-link">authoritative book on resilient AWS architectures </a>, and frequent speaking engagements at premier global events such as AWS re:Invent, KubeCon, and DeveloperWeek. I spearhead the development and continuous enhancement of flagship AWS observability initiatives, including the official <a href="https://observability.workshop.aws/" className="highlighted-link">AWS Observability Workshop</a>-utilized by over 700,000 users annually, the <a href="https://aws-observability.github.io/observability-best-practices/" className='highlighted-link'>AWS Observability Best Practices Guide</a>, and <a href="https://aws-samples.github.io/cloud-operations-best-practices/" className='highlighted-link'>AWS Cloud Operations Best Practices Guide </a> that are maintained by a global team of solution architects under my leadership.
      </Paragraph>

      <Paragraph>
        My strategic vision and operational leadership have fostered innovation in open-source observability tooling, exemplified by the <a href="https://aws-observability.github.io/terraform-aws-observability-accelerator/" className='highlighted-link'>AWS Observability Accelerator for Terraform,</a> and <a href="https://aws-observability.github.io/cdk-aws-observability-accelerator/" className='highlighted-link'>AWS Observability Accelerator for CDK</a> simplifying observability deployment for Amazon EKS environments worldwide.
      </Paragraph>
      <Paragraph>
        Through these efforts, I have established a strong industry presence, recognized by awards and extensive third-party citations, positioning me as a senior executive capable of leading large, diverse, and distributed technical teams to deliver transformative cloud observability solutions on a global scale.
      </Paragraph>

      <SectionDivider />

      <Subtitle>AWS Cloud Operations Show</Subtitle>

      <ShowCard href="https://www.youtube.com/playlist?list=PLehXSATXjcQHj8bPSf0uZuQBoxJ7a7ag7" target="_blank" rel="noopener noreferrer">
        <PlayIcon>
          <FontAwesomeIcon icon={faPlay} />
        </PlayIcon>
        <ShowTitle>AWS Cloud Operations Show</ShowTitle>
        <ShowDescription>
          Join me for the AWS Cloud Operations Show where we dive deep into best practices, new features, and expert tips for managing and optimizing your AWS infrastructure.
        </ShowDescription>
        <ShowMeta>Livestream every other Thursday at 2:00 PM ET • Hosted by Imaya Kumar Jagannathan & Team</ShowMeta>
      </ShowCard>

      <SectionDivider />

      <Subtitle>Speaking Engagements</Subtitle>

      {/* First Row */}
      <CardGrid>
        <SpeakingCard href="https://www.youtube.com/watch?v=2h1oaiyQ-oU" target="_blank" rel="noopener noreferrer">
          <EventTitle>Best practices for end-to-end digital experience monitoring</EventTitle>
          <EventDate>AWS re:Invent 2024</EventDate>
          <EventLocation>Las Vegas, NV</EventLocation>
        </SpeakingCard>

        <SpeakingCard href="https://www.youtube.com/watch?v=ziyTvW_jkxI" target="_blank" rel="noopener noreferrer">
          <EventTitle>Operating with AWS open source observability</EventTitle>
          <EventDate>AWS re:Invent 2023</EventDate>
          <EventLocation>Las Vegas, NV</EventLocation>
        </SpeakingCard>

        <SpeakingCard href="https://www.linkedin.com/posts/imaya_fidelity-aws-observability-activity-7090013116192751616-NecF" target="_blank" rel="noopener noreferrer">
          <EventTitle>Fidelity's observability platform for telemetry</EventTitle>
          <EventDate>AWS Summit 2023</EventDate>
          <EventLocation>New York</EventLocation>
        </SpeakingCard>

        <SpeakingCard href="https://youtu.be/pVTjCTXwk2I?t=6122" target="_blank" rel="noopener noreferrer">
          <EventTitle>Monitoring Amazon EMR on EKS workloads using Amazon Managed Service for Prometheus</EventTitle>
          <EventDate>AWS Summit 2023</EventDate>
          <EventLocation>Washington DC</EventLocation>
        </SpeakingCard>
      </CardGrid>

      {/* Second Row */}
      <CardGrid>
        <SpeakingCard href="https://youtu.be/LGD52z0LxAA?t=18048" target="_blank" rel="noopener noreferrer">
          <EventTitle>Operating Open Telemetry Collector for Scale and Resiliency</EventTitle>
          <EventDate>KubeCon 2023</EventDate>
          <EventLocation>Amsterdam, Netherlands</EventLocation>
        </SpeakingCard>

        <SpeakingCard href="https://www.youtube.com/watch?v=2IJPpdp9xU0&t=591s&pp=ygUYYXdzIHJlaW52ZW50IGltYXlhIGt1bWFy" target="_blank" rel="noopener noreferrer">
          <EventTitle>Observability the Open Source Way</EventTitle>
          <EventDate>AWS re:Invent 2022</EventDate>
          <EventLocation>Las Vegas, NV</EventLocation>
        </SpeakingCard>

        <SpeakingCard href="https://www.youtube.com/watch?v=or7uFFyHIX0" target="_blank" rel="noopener noreferrer">
          <EventTitle>Full-stack observability and application monitoring with AWS</EventTitle>
          <EventDate>AWS Summit 2022</EventDate>
          <EventLocation>San Francisco, CA</EventLocation>
        </SpeakingCard>

        <SpeakingCard href="https://www.youtube.com/watch?v=GSHtAn5pTO8" target="_blank" rel="noopener noreferrer">
          <EventTitle>Implementing observability for .NET apps on AWS</EventTitle>
          <EventDate>AWS re:Invent 2021</EventDate>
          <EventLocation>Las Vegas, NV</EventLocation>
        </SpeakingCard>
      </CardGrid>

      {/* Third Row */}
      <CardGrid>
        <SpeakingCard href="https://www.youtube.com/watch?v=MZ-4HzOC_ac&t=25191s" target="_blank" rel="noopener noreferrer">
          <EventTitle>Launching Amazon Managed Service for Prometheus</EventTitle>
          <EventDate>KubeCon EU 2021</EventDate>
          <EventLocation>Virtual</EventLocation>
        </SpeakingCard>

        <SpeakingCard href="https://www.youtube.com/watch?v=iyHzC6DhRVw&t=1618s" target="_blank" rel="noopener noreferrer">
          <EventTitle>Observability the Open Source Way</EventTitle>
          <EventDate>AWS re:Invent 2021</EventDate>
          <EventLocation>Las Vegas, NV</EventLocation>
        </SpeakingCard>

        <SpeakingCard href="https://www.youtube.com/watch?v=_d_9xCfVBTM" target="_blank" rel="noopener noreferrer">
          <EventTitle>Increase availability with AWS observability solutions</EventTitle>
          <EventDate>AWS re:Invent 2020</EventDate>
          <EventLocation>Las Vegas, NV</EventLocation>
        </SpeakingCard>

        <SpeakingCard href="https://d1.awsstatic.com/events/reinvent/2019/REPEAT_3_Monitoring_modern_apps_Containers,_microservices,_and_more_MGT308-R3.pdf" target="_blank" rel="noopener noreferrer">
          <EventTitle>Monitoring modern apps: Containers, microservices, and more</EventTitle>
          <EventDate>AWS re:Invent 2019</EventDate>
          <EventLocation>Las Vegas, NV</EventLocation>
        </SpeakingCard>
      </CardGrid>
      <CardGrid>
        <SpeakingCard href="https://www.youtube.com/watch?v=75p2ete1Cqo" target="_blank" rel="noopener noreferrer">
          <EventTitle>Thomson Reuters: How It Hosted NET App on ECS Using Windows Containers</EventTitle>
          <EventDate>AWS re:Invent 2018</EventDate>
          <EventLocation>Las Vegas, NV</EventLocation>
        </SpeakingCard>
      </CardGrid>

      <SectionDivider />

      <Subtitle>Online Technical Sessions</Subtitle>

      {/* First Row */}
      <CardGrid>
        <TechnicalSessionCard href="https://www.youtube.com/watch?v=F6V4vscvOeY&t=114s" target="_blank" rel="noopener noreferrer">
          <TechnicalSessionTitle>CDK Observability Accelerator Deep Dive</TechnicalSessionTitle>
          <TechnicalSessionDate>Containers from the Couch 2023</TechnicalSessionDate>
        </TechnicalSessionCard>

        <TechnicalSessionCard href="https://www.youtube.com/watch?v=gTXACKl4GiI" target="_blank" rel="noopener noreferrer">
          <TechnicalSessionTitle>AWS Observability and Nobl9: A Journey to Optimize the Metrics Stack</TechnicalSessionTitle>
          <TechnicalSessionDate>Nobl9 Webinar</TechnicalSessionDate>
        </TechnicalSessionCard>

        <TechnicalSessionCard href="https://youtu.be/7jMtbCDOIqw?t=854" target="_blank" rel="noopener noreferrer">
          <TechnicalSessionTitle>Launching EKS Observability Accelerator</TechnicalSessionTitle>
          <TechnicalSessionDate>Containers from the Couch 2022</TechnicalSessionDate>
        </TechnicalSessionCard>

        <TechnicalSessionCard href="https://www.youtube.com/watch?v=FXBZUtrld3k&t=1285s" target="_blank" rel="noopener noreferrer">
          <TechnicalSessionTitle>Accelerating Adoption of AWS Open-Source Observability Services</TechnicalSessionTitle>
          <TechnicalSessionDate>AWS Online Tech Talks 2022</TechnicalSessionDate>
        </TechnicalSessionCard>
      </CardGrid>

      {/* Second Row */}
      <CardGrid>
        <TechnicalSessionCard href="https://www.youtube.com/watch?v=FXBZUtrld3k&t=1285s" target="_blank" rel="noopener noreferrer">
          <TechnicalSessionTitle>Accelerating Adoption of AWS Open-Source Observability Services</TechnicalSessionTitle>
          <TechnicalSessionDate>AWS Online Tech Talks 2022</TechnicalSessionDate>
        </TechnicalSessionCard>

        <TechnicalSessionCard href="https://www.youtube.com/watch?v=YlupF_OAGIg" target="_blank" rel="noopener noreferrer">
          <TechnicalSessionTitle>Implementing Observability with Amazon Managed Open Source Services</TechnicalSessionTitle>
          <TechnicalSessionDate>AWS Online Tech Talk 2021</TechnicalSessionDate>
        </TechnicalSessionCard>

        <TechnicalSessionCard href="https://youtu.be/KZVemZLExnw?t=1050" target="_blank" rel="noopener noreferrer">
          <TechnicalSessionTitle>Launching Prometheus metrics support for Container Insights</TechnicalSessionTitle>
          <TechnicalSessionDate>Containers from the Couch 2021</TechnicalSessionDate>
        </TechnicalSessionCard>

        <TechnicalSessionCard href="https://www.youtube.com/watch?v=Bh71xBQe92I&t=1575s" target="_blank" rel="noopener noreferrer">
          <TechnicalSessionTitle>Monitoring container workloads with Amazon Managed Service for Prometheus and Grafana</TechnicalSessionTitle>
          <TechnicalSessionDate>Containers from the Couch 2021</TechnicalSessionDate>
        </TechnicalSessionCard>
      </CardGrid>

      <SectionDivider />

      <Subtitle>.NET Development on AWS - Videos</Subtitle>

      <CardGrid>
        <DotNetCard href="https://www.youtube.com/watch?v=EF1NES9BX8c" target="_blank" rel="noopener noreferrer">
          <DotNetCardTitle>Using AWS Lambda Layers in .NET</DotNetCardTitle>
        </DotNetCard>

        <DotNetCard href="https://www.youtube.com/watch?v=-6k-TFV3M8o" target="_blank" rel="noopener noreferrer">
          <DotNetCardTitle>.NET, IoT, and Lambda</DotNetCardTitle>
        </DotNetCard>

        <DotNetCard href="https://www.youtube.com/watch?v=yBmxRdB--4Q" target="_blank" rel="noopener noreferrer">
          <DotNetCardTitle>Amazon Translate Service through .NET</DotNetCardTitle>
        </DotNetCard>

        <DotNetCard href="https://www.youtube.com/watch?v=Q1RWpB2juKI" target="_blank" rel="noopener noreferrer">
          <DotNetCardTitle>Perform Sentiment Analysis on a Text</DotNetCardTitle>
        </DotNetCard>
      </CardGrid>

      <SectionDivider />

      <Subtitle>Publications and General Public Conferences</Subtitle>

      <ArticleGrid>
        <PublicationCard href="https://thenewstack.io/no-more-fomo-efficiency-in-slo-driven-monitoring/" target="_blank" rel="noopener noreferrer">
          <PublicationTitle>SLO driven monitoring</PublicationTitle>
          <PublicationSource>The NewStack</PublicationSource>
        </PublicationCard>

        <PublicationCard href="https://www.dataversity.net/observability-maturity-model-a-framework-to-enhance-monitoring-and-observability-practices/" target="_blank" rel="noopener noreferrer">
          <PublicationTitle>Observability Maturity Model: A Framework to Enhance Monitoring and Observability Practices</PublicationTitle>
          <PublicationSource>Dataversity</PublicationSource>
        </PublicationCard>

        <PublicationCard href="https://techstrong.tv/videos/interviews/sloconf-kit-merker-nobl9" target="_blank" rel="noopener noreferrer">
          <PublicationTitle>Panel discussion on SLO monitoring</PublicationTitle>
          <PublicationSource>Techstrong.tv</PublicationSource>
        </PublicationCard>

        <PublicationCard href="https://www.youtube.com/watch?v=Yq3A85qHtnc" target="_blank" rel="noopener noreferrer">
          <PublicationTitle>FOMO vs SLO driven monitoring</PublicationTitle>
          <PublicationSource>SLO Conf</PublicationSource>
        </PublicationCard>

        <PublicationCard href="https://hopin.com/events/developerweek-global-cloud-2021#speakers" target="_blank" rel="noopener noreferrer">
          <PublicationTitle>Observability in the Cloud</PublicationTitle>
          <PublicationSource>Developerweek conference</PublicationSource>
        </PublicationCard>
      </ArticleGrid>

      <SectionDivider />

      <Subtitle>Recognitions and Awards</Subtitle>

      <CardGrid>
        {/* <AwardCard href="https://nyweekly.com/lifestyle/imaya-kumar-jagannathan-inspiring-change-and-empowering-communities/" target="_blank" rel="noopener noreferrer">
          <AwardTitle>Imaya Kumar Jagannathan: Inspiring Change and Empowering Communities</AwardTitle>
          <AwardDescription>NY Weekly</AwardDescription>
        </AwardCard>

        <AwardCard href="https://www.freepressjournal.in/tech/charting-new-terrains-in-observability-the-imaya-kumar-jagannathan-story" target="_blank" rel="noopener noreferrer">
          <AwardTitle>Charting New Terrains in Observability: The Imaya Kumar Jagannathan Story</AwardTitle>
          <AwardDescription>Free Press Journal</AwardDescription>
        </AwardCard>

        <AwardCard href="https://globeeawards.com/imaya-kumar-jagannathan/" target="_blank" rel="noopener noreferrer">
          <AwardTitle>Globee Award - Volunteering as an Industry Expert and Judge</AwardTitle>
          <AwardDescription>Globee Awards</AwardDescription>
        </AwardCard> */}

        {/* New Awards */}
        <AwardCard>
          <AwardTitle>AWS “Inspiration Award”</AwardTitle>
          <AwardDescription>For mentoring worldwide technical architects to achieve exceptional results</AwardDescription>
        </AwardCard>

        <AwardCard>
          <AwardTitle>“Top Resolver” of Specialist Requests</AwardTitle>
          <AwardDescription>Awarded at AWS in the years 2021 and 2022</AwardDescription>
        </AwardCard>

        <AwardCard>
          <AwardTitle>25+ Accolades from AWS Leaders</AwardTitle>
          <AwardDescription>Recognized for contributions to key projects by senior technical employees and leaders</AwardDescription>
        </AwardCard>

        <AwardCard>
          <AwardTitle>Accolades from Bill Gates</AwardTitle>
          <AwardDescription>For my “Think Week” innovation paper about “Smart Advertisements in Television”</AwardDescription>
        </AwardCard>

        <AwardCard>
          <AwardTitle>Award from Steve Ballmer</AwardTitle>
          <AwardDescription>Received from Steve Ballmer for developing innovative tools in the largest Exchange migration project at Microsoft</AwardDescription>
        </AwardCard>

        <AwardCard>
          <AwardTitle>CPE Champion Award</AwardTitle>
          <AwardDescription>Awarded twice for high Customer Satisfaction at Microsoft</AwardDescription>
        </AwardCard>
      </CardGrid>

      <SectionDivider />

      {/* New Collapsible Section */}
      <CollapsibleSection>
        <Subtitle onClick={toggleCollapse} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Mentions on 3rd Party Websites
          <span>{isCollapsed ? '▲' : '▼'}</span>
        </Subtitle>
        <CollapsibleContent isOpen={isCollapsed}>
          <LinkList>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-newsletter-171-4o49" target="_blank" rel="noopener noreferrer">
                AWS Open Source Newsletter #171
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-news-and-updates-111-1dj3" target="_blank" rel="noopener noreferrer">
                AWS Open Source News and Updates #111
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-news-and-updates-no-20-hd3" target="_blank" rel="noopener noreferrer">
                AWS Open Source News and Updates #20
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-newsletter-146-26bh" target="_blank" rel="noopener noreferrer">
                AWS Open Source Newsletter #146
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-newsletter-133-ocf" target="_blank" rel="noopener noreferrer">
                AWS Open Source Newsletter #133
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/094459/aws-open-source-news-and-updates-127-56n9" target="_blank" rel="noopener noreferrer">
                AWS Open Source News and Updates #127
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-news-and-updates-94-3o90" target="_blank" rel="noopener noreferrer">
                AWS Open Source News and Updates #94
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-news-and-updates-84-4c4e" target="_blank" rel="noopener noreferrer">
                AWS Open Source News and Updates #84
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-news-and-updates-73-1fh7" target="_blank" rel="noopener noreferrer">
                AWS Open Source News and Updates #73
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-news-and-updates-72-lj9" target="_blank" rel="noopener noreferrer">
                AWS Open Source News and Updates #72
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-news-and-updates-70-5bj2" target="_blank" rel="noopener noreferrer">
                AWS Open Source News and Updates #70
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-news-and-updates-65-27bk" target="_blank" rel="noopener noreferrer">
                AWS Open Source News and Updates #65
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-news-and-updates-62-ib9" target="_blank" rel="noopener noreferrer">
                AWS Open Source News and Updates #62
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-news-and-updates-58-p8g" target="_blank" rel="noopener noreferrer">
                AWS Open Source News and Updates #58
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-news-and-updates-no-49-514c" target="_blank" rel="noopener noreferrer">
                AWS Open Source News and Updates #49
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-news-and-updates-no-40-4ea" target="_blank" rel="noopener noreferrer">
                AWS Open Source News and Updates #40
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-news-and-updates-no-39-1hp3" target="_blank" rel="noopener noreferrer">
                AWS Open Source News and Updates #39
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-news-and-updates-80-477e" target="_blank" rel="noopener noreferrer">
                AWS Open Source News and Updates #80
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-news-and-updates-113-16a4" target="_blank" rel="noopener noreferrer">
                AWS Open Source News and Updates #113
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-news-and-updates-55-21eh" target="_blank" rel="noopener noreferrer">
                AWS Open Source News and Updates #55
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://dev.to/aws/aws-open-source-news-and-updates-5145" target="_blank" rel="noopener noreferrer">
                AWS Open Source News and Updates #5145
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://o11y.news/2022-05-09/" target="_blank" rel="noopener noreferrer">
                Observability News - May 9, 2022
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://o11y.news/2021-03-01/#amg-using-identity-providers" target="_blank" rel="noopener noreferrer">
                Observability News - March 1, 2021
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://o11y.news/2022-05-23/#eks-observability" target="_blank" rel="noopener noreferrer">
                Observability News - May 23, 2022
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://o11y.news/2021-10-04/#managed-prometheus" target="_blank" rel="noopener noreferrer">
                Observability News - October 4, 2021
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://o11y.news/2022-12-26/#opentelemetry-for-eks" target="_blank" rel="noopener noreferrer">
                Observability News - December 26, 2022
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://o11y.news/2021-04-26/#aws-observability-workshop" target="_blank" rel="noopener noreferrer">
                Observability News - April 26, 2021
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://o11y.news/2021-04-19/#managed-grafana-goes-public" target="_blank" rel="noopener noreferrer">
                Observability News - April 19, 2021
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://o11y.news/2022-07-18/#slo-monitoring" target="_blank" rel="noopener noreferrer">
                Observability News - July 18, 2022
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://o11y.news/2021-12-20/#new-managed-grafana-features" target="_blank" rel="noopener noreferrer">
                Observability News - December 20, 2021
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://o11y.news/2021-09-06/#amazon-managed-grafana-is-ga" target="_blank" rel="noopener noreferrer">
                Observability News - September 6, 2021
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://o11y.news/2021-12-27/#open-source-o11y" target="_blank" rel="noopener noreferrer">
                Observability News - December 27, 2021
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://o11y.news/2021-06-21/#on-prem-metrics-for-amp" target="_blank" rel="noopener noreferrer">
                Observability News - June 21, 2021
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://o11y.news/2021-06-14/#amg-for-hybrid-envs" target="_blank" rel="noopener noreferrer">
                Observability News - June 14, 2021
              </a>
            </LinkItem>
            <LinkItem>
              <a href="https://o11y.news/2021-05-24/#open-source-o11y-at-aws" target="_blank" rel="noopener noreferrer">
                Observability News - May 24, 2021
              </a>
            </LinkItem>
          </LinkList>
        </CollapsibleContent>
      </CollapsibleSection>
    </Container>
  );
};

export default Activities;