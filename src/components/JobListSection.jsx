import { SimpleGrid, Container, Box } from '@mantine/core';
import { useState } from 'react';
import JobCard from './JobCard';
import CreateJobModal from './CreateJobModal';

export default function JobListSection() {

  const mockJobs = [ {
    id: 1,
    companyName: 'Amazon',
    title: 'Full Stack Developer',
    experience: '1-3 yr',
    locationType: 'Remote',
    salary: '₹12 LPA',
    posted: '24h ago',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png',
    logoBgColor: 'gray',
    description: [
      'Build scalable APIs and interfaces.',
      'Collaborate with cross-functional teams.',
    ],
  },
  {
    id: 2,
    companyName: 'Tesla',
    title: 'Node.js Developer',
    experience: '2-4 yr',
    locationType: 'Onsite',
    salary: '₹15 LPA',
    posted: '2 days ago',
    logoUrl: 'https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG19.png',
    logoBgColor: 'red',
    description: [
      'Develop backend services in Node.js.',
      'Write maintainable code and tests.',
    ],
  },
  {
    id: 3,
    companyName: 'Google',
    title: 'Frontend Engineer',
    experience: '1-2 yr',
    locationType: 'Hybrid',
    salary: '₹14 LPA',
    posted: '1 day ago',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vzo7Ymf5xVke-KCISLsL61nQTfezk7ZcHr06bA9txVHf9YewHdIbBROsDfxbDTrNYC4',
    logoBgColor: 'blue',
    description: ['Create intuitive UIs', 'Optimize performance'],
  },
  {
    id: 4,
    companyName: 'Microsoft',
    title: 'DevOps Engineer',
    experience: '3-5 yr',
    locationType: 'Remote',
    salary: '₹16 LPA',
    posted: '4 days ago',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png',
    logoBgColor: 'indigo',
    description: ['Maintain CI/CD pipelines', 'Infrastructure monitoring'],
  },
  {
    id: 5,
    companyName: 'Netflix',
    title: 'React Developer',
    experience: '2 yr',
    locationType: 'Remote',
    salary: '₹13 LPA',
    posted: '1 day ago',
    logoUrl: 'https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG19.png',
    logoBgColor: 'black',
    description: ['Build Netflix UIs', 'Use Redux and Hooks'],
  },
  {
    id: 6,
    companyName: 'Flipkart',
    title: 'Backend Developer',
    experience: '2-3 yr',
    locationType: 'Onsite',
    salary: '₹11 LPA',
    posted: 'Today',
    logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2vzo7Ymf5xVke-KCISLsL61nQTfezk7ZcHr06bA9txVHf9YewHdIbBROsDfxbDTrNYC4',
    logoBgColor: 'yellow',
    description: ['Create scalable services', 'RESTful API design'],
  },
  {
    id: 7,
    companyName: 'Swiggy',
    title: 'Mobile App Dev',
    experience: '1 yr',
    locationType: 'Onsite',
    salary: '₹10 LPA',
    posted: 'Yesterday',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png',
    logoBgColor: 'orange',
    description: ['Build food delivery UI', 'Flutter or React Native'],
  },
  {
    id: 8,
    companyName: 'Zomato',
    title: 'QA Engineer',
    experience: '1-2 yr',
    locationType: 'Hybrid',
    salary: '₹9 LPA',
    posted: '3 days ago',
    logoUrl: 'https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG19.png',
    logoBgColor: 'pink',
    description: ['Manual & automation testing', 'Write test cases'],
  }, 
];

  return (
    <Box bg="#fbfbff" py="xl">
    <Container size="xl" py="xl">
      <SimpleGrid cols={4} spacing="lg" breakpoints={[{ maxWidth: 1200, cols: 3 }, { maxWidth: 900, cols: 2 }, { maxWidth: 600, cols: 1 }]}>
        {mockJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </SimpleGrid>

    </Container>
    </Box>
  );
}
