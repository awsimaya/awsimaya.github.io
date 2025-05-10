import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const BookSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const BookDetails = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const ChapterList = styled.ul`
  list-style-type: disc;
  padding-left: 2rem;
  margin-top: 1.5rem;
`;

const ChapterItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding: 2rem; /* Add padding for spacing */
  background: linear-gradient(135deg, #f0f8ff, #e6e6fa); /* Gradient background */
  border: 1px solid #ddd; /* Subtle border */
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add a shadow for depth */
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Lift effect on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const BookImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

const BookImage = styled.img`
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
`;

const BookInfo = styled.div`
  flex: 1;
`;

const BookTitle = styled.h2`
  margin-bottom: 1rem;
  color: #333;
`;

const BookDescription = styled.p`
  line-height: 1.6;
  color: #555;
  margin-bottom: 1.5rem;
`;

const AmazonButton = styled.a`
  display: inline-block;
  background-color: #FF9900;
  color: #000;
  font-weight: bold;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #FF8C00;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Books = () => {
  const amazonLink = "https://www.amazon.com/Building-Resilient-Architectures-AWS-cost-efficient/dp/B0DKNLVTDV";
  
  return (
    <Container>
      {/* <Title>Books</Title> */}
      
      <BookSection>
        <BookContainer>
          <BookImageContainer>
            <a href={amazonLink} target="_blank" rel="noopener noreferrer">
              <BookImage 
                src="/images/book-cover.jpg" 
                alt="Building Resilient Architectures on AWS" 
              />
            </a>
            <AmazonButton href={amazonLink} target="_blank" rel="noopener noreferrer">
              Buy on Amazon
            </AmazonButton>
          </BookImageContainer>
          
          <BookInfo>
            <BookTitle>Building Resilient Architectures on AWS</BookTitle>
            <BookDescription>
              A comprehensive guide to designing cost-efficient, scalable, and fault-tolerant systems on Amazon Web Services. This book provides practical insights into building cloud architectures that can withstand failures and continue operating effectively.
            </BookDescription>
          </BookInfo>
        </BookContainer>
        <BookDetails>
          <BookDescription>
            You will find that the book takes you on an exciting, and revealing journey to explore different aspects of building resilient architectures on AWS.
          </BookDescription>
          
          <BookDescription>
            The book contains 15 chapters covering various topics as listed below:
          </BookDescription>
          
          <ChapterList>
            <ChapterItem>Understanding Resilience Concepts</ChapterItem>
            <ChapterItem>Implementing Resilient Compute and Auto Scaling</ChapterItem>
            <ChapterItem>Securing and Backing Up Critical Data</ChapterItem>
            <ChapterItem>Orchestrating Graceful Degradation</ChapterItem>
            <ChapterItem>Exploring AWS Shared Responsibility</ChapterItem>
            <ChapterItem>Learning AWS Well Architected Principles for Resiliency</ChapterItem>
            <ChapterItem>Architecting Fault Tolerant Applications</ChapterItem>
            <ChapterItem>Resiliency Considerations for Serverless Apps</ChapterItem>
            <ChapterItem>Using Containers to Improve Resiliency</ChapterItem>
            <ChapterItem>Resilient Architectures Across Regions</ChapterItem>
            <ChapterItem>Resilient architecture examples</ChapterItem>
            <ChapterItem>Observability, Auditing and Continuous Improvements</ChapterItem>
            <ChapterItem>Perform Chaos engineering testing to find defects within applications</ChapterItem>
            <ChapterItem>Disaster Recovery Planning and Testing</ChapterItem>
            <ChapterItem>AWS Resiliency Services</ChapterItem>
          </ChapterList>
        </BookDetails>
      </BookSection>
    </Container>
  );
};

export default Books;
