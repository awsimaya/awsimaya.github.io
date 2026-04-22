import React from 'react';
import styled, { keyframes, createGlobalStyle } from 'styled-components';

const PrintStyles = createGlobalStyle`
  @media print {
    nav, footer, .no-print { display: none !important; }
    body { background: #fff; }
    @page { margin: 1.5cm; }
  }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* ─── Download Bar ─── */

const DownloadBar = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 1.25rem 2rem 0;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 600px) {
    padding: 1rem 1.25rem 0;
  }

  @media print {
    display: none;
  }
`;

const DownloadButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: #1D1D1F;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 0.6rem 1.25rem;
  border-radius: 980px;
  border: none;
  cursor: pointer;
  letter-spacing: -0.01em;
  transition: all 0.22s ease;

  &:hover {
    background: #3D3D3F;
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  }
`;

/* ─── Page Layout ─── */

const Page = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding: 3.5rem 2rem 5rem;
  animation: ${fadeUp} 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;

  @media (max-width: 600px) {
    padding: 2.5rem 1.25rem 4rem;
  }
`;

/* ─── Resume Header ─── */

const ResumeHeader = styled.div`
  margin-bottom: 2.5rem;
`;

const Name = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  color: #1D1D1F;
  letter-spacing: -0.05em;
  line-height: 1;
  margin: 0 0 0.5rem 0;
`;

const HeadlineRole = styled.p`
  font-size: 1.05rem;
  font-weight: 500;
  color: #0071E3;
  margin: 0 0 1rem 0;
  letter-spacing: -0.01em;
`;

const ContactLine = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 1.25rem;
  font-size: 0.84rem;
  color: #6E6E73;

  a {
    color: #0071E3;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
      opacity: 0.8;
    }
  }
`;

const ContactDot = styled.span`
  color: #C7C7CC;

  @media (max-width: 480px) {
    display: none;
  }
`;

/* ─── Section Primitives ─── */

const Section = styled.section`
  margin-bottom: 2.75rem;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`;

const SectionTitle = styled.h2`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0071E3;
  margin: 0;
  white-space: nowrap;
`;

const SectionRule = styled.div`
  flex: 1;
  height: 1px;
  background: rgba(0, 0, 0, 0.08);
`;

/* ─── Executive Summary ─── */

const SummaryText = styled.p`
  font-size: 0.97rem;
  line-height: 1.8;
  color: #3D3D3F;
  margin: 0 0 0.9rem 0;
`;

/* ─── Core Competencies ─── */

const PillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 1rem;
`;

const Pill = styled.span`
  font-size: 0.78rem;
  font-weight: 500;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.05);
  color: #3D3D3F;
  border: 1px solid rgba(0, 0, 0, 0.07);
  letter-spacing: -0.005em;
`;

const TechLabel = styled.p`
  font-size: 0.78rem;
  color: #86868B;
  line-height: 1.7;
  margin: 0.75rem 0 0 0;

  strong {
    color: #3D3D3F;
    font-weight: 600;
  }
`;

/* ─── Experience ─── */

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Job = styled.div`
  position: relative;
  padding-left: 1.25rem;
  border-left: 2px solid rgba(0, 0, 0, 0.07);

  &:hover {
    border-left-color: #0071E3;
  }

  transition: border-left-color 0.2s ease;
`;

const JobHeader = styled.div`
  margin-bottom: 0.75rem;
`;

const JobCompany = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 0.2rem;
`;

const JobCompanyName = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #1D1D1F;
  margin: 0;
  letter-spacing: -0.02em;
`;

const JobLocation = styled.span`
  font-size: 0.8rem;
  color: #86868B;
`;

const JobTitle = styled.p`
  font-size: 0.88rem;
  font-weight: 600;
  color: #0071E3;
  margin: 0 0 0.15rem 0;
`;

const JobDates = styled.p`
  font-size: 0.78rem;
  color: #86868B;
  margin: 0;
  font-weight: 500;
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

const Achievement = styled.li`
  font-size: 0.875rem;
  line-height: 1.72;
  color: #3D3D3F;
  padding-left: 1.1rem;
  position: relative;

  &::before {
    content: '·';
    position: absolute;
    left: 0;
    color: #0071E3;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.55;
  }

  strong {
    font-weight: 600;
    color: #1D1D1F;
  }
`;

/* ─── Awards ─── */

const AwardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const AwardItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;
  align-items: baseline;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #3D3D3F;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.1rem;
  }
`;

const AwardName = styled.span`
  font-weight: 600;
  color: #1D1D1F;
  white-space: nowrap;

  &::before {
    content: '· ';
    color: #0071E3;
    font-weight: 700;
  }

  @media (max-width: 480px) {
    white-space: normal;
  }
`;

const AwardDesc = styled.span`
  color: #6E6E73;
`;

/* ─── Publications ─── */

const PubList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const PubItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.75rem;
  align-items: baseline;
  font-size: 0.875rem;
  line-height: 1.6;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.1rem;
  }
`;

const PubBullet = styled.span`
  color: #0071E3;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.55;
`;

const PubText = styled.span`
  color: #3D3D3F;

  strong {
    font-weight: 600;
    color: #1D1D1F;
  }
`;

/* ─── Education ─── */

const EduList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const EduItem = styled.div`
  font-size: 0.875rem;
  line-height: 1.6;
  color: #3D3D3F;
`;

const EduDegree = styled.span`
  font-weight: 600;
  color: #1D1D1F;
`;

const EduMeta = styled.span`
  color: #86868B;
`;

/* ─── Component ─── */

const Resume = () => {
  return (
    <>
      <PrintStyles />
      <DownloadBar className="no-print">
        <DownloadButton onClick={() => window.print()}>
          ↓ Download PDF
        </DownloadButton>
      </DownloadBar>
    <Page>

      {/* ── Header ── */}
      <ResumeHeader>
        <Name>Imaya Kumar Jagannathan</Name>
        <HeadlineRole>Sr. Manager, Worldwide Specialist Solution Architects &amp; Principal Specialist SA · AWS</HeadlineRole>
        <ContactLine>
          <span>Atlanta, GA</span>
          <ContactDot>·</ContactDot>
          <a href="mailto:imayakumar@outlook.com">imayakumar@outlook.com</a>
          <ContactDot>·</ContactDot>
          <a href="https://linkedin.com/in/imaya" target="_blank" rel="noopener noreferrer">linkedin.com/in/imaya</a>
          <ContactDot>·</ContactDot>
          <span>US Green Card Holder</span>
        </ContactLine>
      </ResumeHeader>

      {/* ── Executive Summary ── */}
      <Section>
        <SectionHeader>
          <SectionTitle>Executive Summary</SectionTitle>
          <SectionRule />
        </SectionHeader>
        <SummaryText>
          Technology executive with 22+ years of experience building scalable technical systems, leading cross-functional
          teams, and driving AI-powered transformation at global scale. Currently leading a worldwide technical organization
          at AWS supporting a $4.2B business, designing platforms, infrastructure, and tooling adopted by 60,000+ users
          and deployed in 30,000+ customer environments. Proven track record of establishing operating models for technical
          teams, defining strategy and roadmaps across complex organizational boundaries, and partnering with engineering,
          product, policy, and operations stakeholders to deliver reliable, scalable solutions.
        </SummaryText>
        <SummaryText>
          Deep expertise in systems thinking, data-driven decision making, and leveraging AI/automation to accelerate
          mission-critical outcomes. Led 3 tier-1 and 9 tier-2 managed service launches at AWS, built enablement
          infrastructure used by 1,500+ technical professionals worldwide, and established best practices frameworks
          with 250,000+ annual views. Published author and recognized thought leader who brings both strategic vision
          and hands-on technical depth.
        </SummaryText>
      </Section>

      {/* ── Core Competencies ── */}
      <Section>
        <SectionHeader>
          <SectionTitle>Core Competencies</SectionTitle>
          <SectionRule />
        </SectionHeader>
        <PillGrid>
          {[
            'Technical Strategy & Roadmap',
            'Scalable Systems & Infrastructure',
            'AI/ML Transformation & Automation',
            'Cross-Functional Leadership',
            'Executive Stakeholder Influence',
            'Team Building & Mentoring',
            'Data-Driven Decision Making',
            'Operating Model Design',
            'Technical Program Management',
            'Change Management & Innovation',
            'Cloud Architecture',
            'Digital Transformation',
          ].map(c => <Pill key={c}>{c}</Pill>)}
        </PillGrid>
        <TechLabel>
          <strong>Technical:</strong> Python, C#, JavaScript, SQL · AWS, Azure · Kubernetes, Docker, EKS, ECS, Lambda ·
          OpenTelemetry, Prometheus, Grafana, CloudWatch, X-Ray · Terraform, AWS CDK · SQL Server, Oracle, Amazon RDS · CI/CD, DevOps, Agile
        </TechLabel>
      </Section>

      {/* ── Experience ── */}
      <Section>
        <SectionHeader>
          <SectionTitle>Professional Experience</SectionTitle>
          <SectionRule />
        </SectionHeader>
        <ExperienceList>

          {/* AWS */}
          <Job>
            <JobHeader>
              <JobCompany>
                <JobCompanyName>Amazon Web Services (AWS)</JobCompanyName>
                <JobLocation>Atlanta, GA</JobLocation>
              </JobCompany>
              <JobTitle>Sr. Manager, Worldwide Specialist Solution Architects &amp; Principal Specialist Solution Architect</JobTitle>
              <JobDates>2018 – Present</JobDates>
            </JobHeader>
            <AchievementList>
              <Achievement>
                <strong>Technical Organization Leadership:</strong> Built and led a worldwide technical organization supporting a $4.2B Cloud Operations business. Established the operating model, including goal setting, strategic project prioritization, performance evaluation, hiring, and talent development. Oversaw the Technical Field Community, a virtual organization of 1,500+ technical professionals worldwide.
              </Achievement>
              <Achievement>
                <strong>Scalable Platforms &amp; Infrastructure:</strong> Architected and delivered the Terraform and CDK Accelerator for observability services, adopted by 100+ organizations and deployed in 30,000+ customer environments. Created the AWS Observability Workshop (observability.workshop.aws), serving 60,000+ users with 5M+ page views, growing from a solo effort to 75+ contributors across 3 continents.
              </Achievement>
              <Achievement>
                <strong>AI Transformation &amp; Automation:</strong> Led design of the AWS Observability Maturity Model, a data-driven assessment framework that generates qualified leads and drives business development. Now serves as the core principle for 4 GTM initiatives and guides all Observability Customer Success projects at AWS.
              </Achievement>
              <Achievement>
                <strong>Service Launches:</strong> Core team member for 3 tier-1 AWS managed service launches (Amazon Managed Service for Prometheus, Amazon Managed Grafana, AWS Distro for OpenTelemetry) and 9 tier-2 launches. Owned technical strategy, beta programs, and field enablement. Partnered with engineering, product, marketing, and operations to generate $200M+ in annual revenue.
              </Achievement>
              <Achievement>
                <strong>Executive Influence:</strong> Served as executive technical authority across 35+ enterprise accounts influencing $700M+ in revenue. Engaged directly with CTOs, CIOs, VPs of Engineering, and Directors.
              </Achievement>
              <Achievement>
                <strong>Best Practices &amp; Enablement:</strong> Led creation of the AWS Observability Best Practices Guide and Cloud Operations Best Practices Guide (250,000+ combined annual views). Published 70+ technical articles on official AWS blog channels. Scaled internal expertise to 250+ contributors worldwide.
              </Achievement>
              <Achievement>
                <strong>Thought Leadership:</strong> Delivered keynotes, workshops, and executive briefings at AWS re:Invent (2018–present), KubeCon, SLOConf, and DeveloperCon. Recognized with AWS "Inspiration Award" (2023) for mentoring worldwide technical architects.
              </Achievement>
            </AchievementList>
          </Job>

          {/* Bisk */}
          <Job>
            <JobHeader>
              <JobCompany>
                <JobCompanyName>Bisk Education</JobCompanyName>
                <JobLocation>Tampa, FL</JobLocation>
              </JobCompany>
              <JobTitle>Director of Software Engineering</JobTitle>
              <JobDates>2015 – 2018</JobDates>
            </JobHeader>
            <AchievementList>
              <Achievement>
                <strong>Technical Strategy:</strong> Reporting to the CTO, defined and executed the enterprise architecture strategy. Developed a tool selection methodology that consolidated the technology footprint, reducing cost and operational complexity. Led technical evaluation and org-wide rollout of Salesforce with reporting up to the CEO.
              </Achievement>
              <Achievement>
                <strong>Cloud Platform Design:</strong> Led a team of architects designing AWS-based, internet-scale systems for student application processing, payments, online ordering, and university partner integrations. Architected a cloud-based ESB and API Management layer for seamless third-party integration.
              </Achievement>
              <Achievement>
                <strong>Team &amp; Culture Transformation:</strong> Managed architects and developers through a full organizational shift from waterfall to Agile/DevOps, introducing CI/CD pipelines, code reviews, sprint retrospectives, and engineering best practices. Mentored junior engineers into senior technical roles, building a self-sustaining engineering culture.
              </Achievement>
            </AchievementList>
          </Job>

          {/* Convene */}
          <Job>
            <JobHeader>
              <JobCompany>
                <JobCompanyName>Convene Technologies</JobCompanyName>
                <JobLocation>Tampa, FL</JobLocation>
              </JobCompany>
              <JobTitle>Senior Solutions Architect</JobTitle>
              <JobDates>2014 – 2015</JobDates>
            </JobHeader>
            <AchievementList>
              <Achievement>
                Architected, developed (ASP.NET, C#, Azure SQL), and delivered a multimedia web/mobile healthcare solution on Azure, automating doctor office visits, achieving 60% productivity increase, 25% travel cost reduction, and 300% faster business processes.
              </Achievement>
              <Achievement>
                Collaborated with the ServiceNow product team to architect self-service cloud provisioning for AWS, Azure, and Rackspace. Features were adopted as native capabilities in the ServiceNow platform.
              </Achievement>
            </AchievementList>
          </Job>

          {/* Microsoft */}
          <Job>
            <JobHeader>
              <JobCompany>
                <JobCompanyName>Microsoft</JobCompanyName>
                <JobLocation>Hyderabad, India &amp; US</JobLocation>
              </JobCompany>
              <JobTitle>Associate Consultant → Program Manager</JobTitle>
              <JobDates>2006 – 2014</JobDates>
            </JobHeader>
            <AchievementList>
              <Achievement>
                <strong>Global Technology Adoption Programs ($2–3B Revenue Impact):</strong> Program managed 3 global TAPs for pre-release enterprise products (Windows Server, SQL Server, SharePoint) across 15 countries and 150+ enterprise customers. Coordinated cross-functional teams of 18–20 spanning engineering, marketing, consulting, and GTM across multiple time zones.
              </Achievement>
              <Achievement>
                <strong>Largest Exchange Migration in Microsoft History:</strong> Lead developer for a 650,000-mailbox Exchange Online migration over 18 months. Built migration tooling so critical that the third-party vendor incorporated it into their official product. Received "Big Team" Global Award from Steve Ballmer.
              </Achievement>
              <Achievement>
                <strong>AT&amp;T Mediaroom (500K+ Subscribers):</strong> Designed deployment architecture for Microsoft Mediaroom across 6 major US cities, enabling AT&amp;T live and VoD television services. Built automation tooling that reduced deployment errors by 45% and accelerated timelines by 60%.
              </Achievement>
              <Achievement>
                <strong>Bill Gates "Think Week":</strong> Selected from thousands of Microsoft employees for Gates' annual innovation program. Paper on "Smart Advertisements in Television" proposed context-aware interactive ads on Mediaroom, predating what is now commonplace on streaming platforms. Personally recognized by Bill Gates.
              </Achievement>
              <Achievement>
                <strong>Early Big Data:</strong> Program managed early-stage Hadoop and Big Data initiatives, partnering with principal engineers and enterprise customers to validate emerging data platform technologies before mainstream adoption.
              </Achievement>
            </AchievementList>
          </Job>

          {/* HP / Virtusa */}
          <Job>
            <JobHeader>
              <JobCompany>
                <JobCompanyName>Hewlett Packard / Virtusa Corporation</JobCompanyName>
              </JobCompany>
              <JobTitle>Software Engineer</JobTitle>
              <JobDates>2002 – 2006</JobDates>
            </JobHeader>
            <AchievementList>
              <Achievement>
                Built foundational engineering skills across enterprise application development and systems integration in large-scale technology environments.
              </Achievement>
            </AchievementList>
          </Job>

        </ExperienceList>
      </Section>

      {/* ── Awards ── */}
      <Section>
        <SectionHeader>
          <SectionTitle>Awards &amp; Recognition</SectionTitle>
          <SectionRule />
        </SectionHeader>
        <AwardList>
          <AwardItem>
            <AwardName>AWS "Inspiration Award" (2023)</AwardName>
            <AwardDesc>Mentoring and coaching worldwide technical architects to achieve exceptional results</AwardDesc>
          </AwardItem>
          <AwardItem>
            <AwardName>"Top Resolver" (2021, 2022)</AwardName>
            <AwardDesc>Highest volume of customer technical escalation resolution at AWS</AwardDesc>
          </AwardItem>
          <AwardItem>
            <AwardName>25+ AWS Leader Accolades</AwardName>
            <AwardDesc>Recognized by senior AWS leaders for contributions to strategic enterprise engagements</AwardDesc>
          </AwardItem>
          <AwardItem>
            <AwardName>Bill Gates Recognition</AwardName>
            <AwardDesc>"Think Week" innovation paper on "Smart Advertisements in Television"</AwardDesc>
          </AwardItem>
          <AwardItem>
            <AwardName>"Big Team" Global Award from Steve Ballmer</AwardName>
            <AwardDesc>Innovative tooling for the largest Exchange migration in Microsoft history (2009)</AwardDesc>
          </AwardItem>
          <AwardItem>
            <AwardName>CPE Champion Award (2008, 2011)</AwardName>
            <AwardDesc>High Customer Satisfaction recognition at Microsoft</AwardDesc>
          </AwardItem>
        </AwardList>
      </Section>

      {/* ── Thought Leadership ── */}
      <Section>
        <SectionHeader>
          <SectionTitle>Thought Leadership &amp; Publications</SectionTitle>
          <SectionRule />
        </SectionHeader>
        <PubList>
          <PubItem>
            <PubBullet>·</PubBullet>
            <PubText><strong>Published Book Author:</strong> "Building Resilient Architectures on AWS"</PubText>
          </PubItem>
          <PubItem>
            <PubBullet>·</PubBullet>
            <PubText><strong>70+ Technical Articles</strong> on official AWS blog channels</PubText>
          </PubItem>
          <PubItem>
            <PubBullet>·</PubBullet>
            <PubText><strong>Host &amp; Creator of "AWS Cloud Operations Show":</strong> Bi-weekly YouTube livestream featuring senior AWS technical leaders, with 25,000+ views</PubText>
          </PubItem>
          <PubItem>
            <PubBullet>·</PubBullet>
            <PubText><strong>Keynote &amp; Conference Speaker:</strong> AWS re:Invent (2018–2025), KubeCon, SLOConf, DeveloperCon, Customer Executive Briefings</PubText>
          </PubItem>
          <PubItem>
            <PubBullet>·</PubBullet>
            <PubText><strong>Creator of the AWS Observability Workshop:</strong> Top-5 most-used AWS workshop globally (observability.workshop.aws) · 60,000+ users · 5M+ page views</PubText>
          </PubItem>
          <PubItem>
            <PubBullet>·</PubBullet>
            <PubText><strong>AWS Observability Best Practices Guide:</strong> Official public-facing website, 150,000+ views annually</PubText>
          </PubItem>
          <PubItem>
            <PubBullet>·</PubBullet>
            <PubText><strong>AWS Cloud Operations Best Practices Guide:</strong> Official public-facing website, 100,000+ views annually</PubText>
          </PubItem>
        </PubList>
      </Section>

      {/* ── Education ── */}
      <Section>
        <SectionHeader>
          <SectionTitle>Education</SectionTitle>
          <SectionRule />
        </SectionHeader>
        <EduList>
          <EduItem>
            <EduDegree>Bachelor of Information Technology</EduDegree>
            <EduMeta>, University of Madras, 2002</EduMeta>
          </EduItem>
          <EduItem>
            <EduDegree>Diploma in Information Technology</EduDegree>
            <EduMeta>, Government Polytechnic College, Krishnagiri, 1999</EduMeta>
          </EduItem>
        </EduList>
      </Section>

    </Page>
    </>
  );
};

export default Resume;
