import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faBluesky } from '@fortawesome/free-brands-svg-icons';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  background: #ffffff; /* Subtle white background */
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Softer shadow */
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%; /* Circular profile image */
  object-fit: cover;
  margin-bottom: 1.5rem;
  border: 3px solid #cccccc; /* Light gray border */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Softer shadow */
`;

const IntroText = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  color: #333333; /* Neutral dark gray */
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: 600; /* Slightly bold for emphasis */
`;

const Paragraph = styled.p`
  color: #555555; /* Subtle gray for text */
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1rem;

  a {
    color: #0056b3; /* Professional blue for links */
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #003d80; /* Darker blue on hover */
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  color: #555555; /* Subtle gray for icons */
  font-size: 1.8rem;
  transition: transform 0.2s ease, color 0.3s ease;

  &:hover {
    color: rgb(40, 122, 236); /* Blue color on hover */
    transform: scale(1.5); /* Zoom in effect */
  }

  &:not(:hover) {
    transform: scale(1); /* Reset scale when not hovered */
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <ProfileImage src="/images/profile_imaya.jpg" alt="Profile" />
      
      <IntroText>
        <Heading>Hello, I'm Imaya Kumar Jagannathan</Heading>
        <Paragraph>
          Technology leader, author, and aviation enthusiast, leading a global team of Specialist Solutions Architects at <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">AWS</a>. I specialize in driving technical strategy, building high-performance teams, and delivering innovative cloud solutions.
        </Paragraph>
        <Paragraph>
          With extensive experience at Microsoft, Virtusa, and other leading organizations, I have spearheaded technology transformations, software architecture, and go-to-market strategies.
        </Paragraph>
        <Paragraph>
          Connect with me on <a href="https://linkedin.com/in/imaya" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </Paragraph>
      </IntroText>
      
      <SocialLinks>
        <SocialLink href="https://linkedin.com/in/imaya" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialLink>
        <SocialLink href="https://github.com/awsimaya" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </SocialLink>
        <SocialLink href="https://bsky.app/profile/imayakumar.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faBluesky} />
        </SocialLink>
      </SocialLinks>
    </HomeContainer>
  );
};

export default Home;
