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
