import React from 'react';
import { Paper, Group, Text, Button, Box } from '@mantine/core';

function HeaderNav({ onCreateClick }) {
  return (
    <Paper
      shadow="md"
      radius="xl"
      mt="md"
      px="xl"
      py="sm"
      w="100%"
      maw={770}             
      mx="auto"
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Group align="center" gap="xl">
        <Box
          style={{
    width: 40,
    height: 40,
    borderRadius: '8px',
    backgroundColor: '#fff',
    backgroundImage: 'url("https://www.cybermindworks.com/images/cmwlogo.svg")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }}
        />

        <Text component="a" href="#" fw={500} size="md" c="black">
          Home
        </Text>
        <Text component="a" href="#" fw={500} size="md" c="black">
          Find Jobs
        </Text>
        <Text component="a" href="#" fw={500} size="md" c="black">
          Find Talents
        </Text>
        <Text component="a" href="#" fw={500} size="md" c="black">
          About Us
        </Text>
        <Text component="a" href="#" fw={500} size="md" c="black">
          Testimonials
        </Text>

        
        <Button radius="xl" color="violet" onClick={onCreateClick}>
          Create Jobs
        </Button>
      </Group>
    </Paper>
  );
}

export default HeaderNav;
