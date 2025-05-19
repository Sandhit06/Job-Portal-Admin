import { Card, Text, Avatar, Badge, Group, Button } from '@mantine/core';
import { IconUsers, IconBuilding, IconCurrencyRupee } from '@tabler/icons-react';

function JobCard({ job, onApply }) {
  return (
    <Card
  shadow="sm"
  radius="md"
  withBorder
  p="lg"
  style={{
    backgroundColor: '#fff',
    maxWidth: 320,
    margin: 'auto',
    width: '100%',
    height: '100%',               
    display: 'flex',              
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
  }}
>
      
      <Group position="apart" align="flex-start">
        <Avatar
          src={job.logoUrl}
          radius="md"
          size="lg"
          color={job.logoBgColor}
        >
          {!job.logoUrl && job.companyName ? job.companyName[0] : ''}
        </Avatar>
        <Badge
          color="blue"
          variant="light"
          size="sm"
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
          }}
>
  {job.posted}
</Badge>

      </Group>

      <Text fw={600} size="md" mt="sm">
        {job.title}
      </Text>

      {/* Info: experience, location type, salary */}
      <Group gap={6} mt={4}>
        <IconUsers size={16} />
        <Text size="xs" c="dimmed">
          {job.experience} Exp
        </Text>
        <IconBuilding size={16} />
        <Text size="xs" c="dimmed">
          {job.locationType}
        </Text>
        <IconCurrencyRupee size={16} />
        <Text size="xs" c="dimmed">
          {job.salary}
        </Text>
      </Group>

      {/* Description bullets */}
      <ul style={{ marginTop: 10, marginBottom: 12, paddingLeft: '1.2rem' }}>
        {job.description.map((point, idx) => (
          <li key={idx} style={{ marginBottom: 4 }}>
            <Text size="sm" c="dimmed">
              {point}
            </Text>
          </li>
        ))}
      </ul>

      <Button onClick={() => alert('Application submitted!')}>Apply Now</Button>

    </Card>
  );
}

export default JobCard;
