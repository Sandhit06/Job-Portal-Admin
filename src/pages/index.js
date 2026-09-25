import Head from 'next/head';
import { useState } from 'react';
import { MantineProvider, Divider, Box } from '@mantine/core';
import HeaderNav from '../components/HeaderNav';
import FilterBar from '../components/FilterBar';
import JobListSection from '../components/JobListSection';
import CreateJobModal from '../components/CreateJobModal';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Head>
        <title>Job Portal Demo | Sandhit Karmakar</title>
        <meta name="description" content="Sandhit Karmakar is a full-stack developer building interactive web applications. Explore his Next.js job portal demo with job listings, search filters and a job creation interface." />
        <meta name="author" content="Sandhit Karmakar" />
        <link rel="canonical" href="https://job-portal-admin-puce.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Job Portal Demo | Sandhit Karmakar" />
        <meta property="og:description" content="Sandhit Karmakar is a full-stack developer building interactive web applications. Explore his Next.js job portal demo with job listings, search filters and a job creation interface." />
        <meta property="og:url" content="https://job-portal-admin-puce.vercel.app/" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <HeaderNav onCreateClick={() => setModalOpen(true)} />
      <FilterBar />

      <Box
        w="100%"
        h="2px"
        mt="md"
        style={{
          backgroundColor: '#f2f2f2',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          borderRadius: 2,
        }}
      />

      <JobListSection />
      <CreateJobModal opened={modalOpen} onClose={() => setModalOpen(false)} />
    </MantineProvider>
  );
}
