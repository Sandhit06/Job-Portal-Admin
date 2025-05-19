// components/CreateJobModal.tsx
import { useState } from 'react';
import { Modal, TextInput, Center, Select, NumberInput, Textarea, Button, Box, Group, Grid, Input } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { IconCurrencyRupee, IconCalendar, IconChevronDown } from '@tabler/icons-react';


export default function CreateJobModal({ opened, onClose }) {
  return (
    <Modal
  opened={opened}
  onClose={onClose}
  title={null}
  centered
  radius="md"
  shadow="lg"
  withCloseButton={false}
  size="70vw"
  styles={{
    content: {
      height: '82vh',
      overflowY: 'auto',
      padding: '24px',
    },
  }}
>
  <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '20px', marginBottom: '24px' }}>
  Create Job Opening
</div>

      <Grid gutter="md"> 
        <Grid.Col span={6}>
          <TextInput 
            label="Job Title" 
            placeholder="Job Title" 
            required
            classNames={{
    input: 'black-input black-focus-input'
  }}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput 
            label="Company Name" 
            placeholder="Amazon, Microsoft, Swiggy" 
            required
            classNames={{
    input: 'black-input black-focus-input'
  }}
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <Select 
            label="Location" 
            placeholder="Choose Preferred Location" 
            data={['Chennai', 'Bangalore', 'Mumbai', 'Kolkata']} 
            rightSection={<IconChevronDown size={14} />} 
            rightSectionWidth={30} 
            styles={{ rightSection: { pointerEvents: 'none' } }} 
            required 
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Select 
            label="Job Type" 
            placeholder="Select Job Type" 
            data={['Internship', 'Part-time', 'Full-time', 'Contract']} 
            rightSection={<IconChevronDown size={14} />} 
            rightSectionWidth={30}
            styles={{ rightSection: { pointerEvents: 'none' } }}
            required 
          />
        </Grid.Col>

        <Grid.Col span={6}>
          <Input.Wrapper label="Salary Range" required>
            <Group noWrap spacing="xs">
              <NumberInput 
                placeholder="₹ 0" 
                hideControls 
                icon={<IconCurrencyRupee size={16} />} 
                styles={{ input: { paddingLeft: '2.5rem' } }} 
                /* paddingLeft added to make space for the icon inside input */
              />
              <NumberInput 
                placeholder="₹ 12,00,000" 
                hideControls 
                icon={<IconCurrencyRupee size={16} />} 
                styles={{ input: { paddingLeft: '2.5rem' } }} 
              />
            </Group>
          </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span={6}>
          <DatePickerInput 
            label="Application Deadline" 
            placeholder="Select date" 
            rightSection={<IconCalendar size={16} />}
rightSectionWidth={30}
styles={{ input: { paddingRight: '2.5rem' } }}
 
            valueFormat="DD/MM/YYYY" 
            minDate={new Date()}  
          />
        </Grid.Col>

        <Grid.Col span={12}>
          <Textarea 
            label="Job Description" 
            placeholder="Please share a description to let the candidate know more about the job role" 
            autosize
minRows={6}
            required 
          />
        </Grid.Col>
      </Grid>

      {/* Footer: Action buttons */}
      <Box mt="xl" style={{ display: 'flex', justifyContent: 'space-between' }}>
  <Button
  variant="outline"
  leftIcon={<span style={{ transform: 'rotate(90deg)' }}>⌄</span>}
  style={{
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'black',
  }}
>
  Save Draft
</Button>

  <Button color="blue" style={{ marginLeft: 'auto' }}>
    Publish »
  </Button>
</Box>
    </Modal>
  );
}
