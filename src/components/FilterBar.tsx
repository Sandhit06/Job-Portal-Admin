import React, { useState } from 'react';
import {
    Box,
    Center,
    Divider,
    Group,
    RangeSlider,
    Select,
    Text,
    TextInput,
} from '@mantine/core';
import { IconSearch, IconMapPin, IconBriefcase } from '@tabler/icons-react';

const FilterBar = () => {
    const [salaryRange, setSalaryRange] = useState<[number, number]>([50, 80]);

    const locations = ['New Delhi', 'Mumbai', 'Bengaluru', 'Remote'];
    const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];

    return (
        <Box
            w="100%"
            py="md"
            mt={15}
            px="md"
            mb={0}
        >
            <Center>
                <Group gap={24} align="center">
                    <TextInput
                        placeholder="Search By Job Title, Role"
                        variant="unstyled"
                        leftSection={<IconSearch size={18} color="#7c7c7c" />}
                        leftSectionPointerEvents="none"
                        style={{ width: 250 }}
                        styles={{
                            input: {
                                '::placeholder': {
                                    color: 'black',
                                },
                            },
                        }}
                    />


                    <Divider orientation="vertical" size="md" style={{ backgroundColor: '#f1f1f1' }} />

                    {/* Preferred Location */}
                    <Select
                        placeholder="Preferred Location"
                        variant="unstyled"
                        leftSection={<IconMapPin size={18} stroke={1.5} />}
                        leftSectionPointerEvents="none"
                        data={locations}
                        style={{ minWidth: 150 }}
                    />

                    <Divider orientation="vertical" size="md" style={{ backgroundColor: '#f1f1f1' }} />

                    <Select
                        placeholder="Job type"
                        variant="unstyled"
                        leftSection={<IconBriefcase size={18} stroke={1.5} />}
                        leftSectionPointerEvents="none"
                        data={jobTypes}
                        style={{ minWidth: 130 }}
                    />

                    <Divider orientation="vertical" size="md" style={{ backgroundColor: '#f1f1f1' }} />

                    {/* Salary Range */}
                    <Box ml={30}>
                        <Group justify="space-between" style={{ width: 250, marginBottom: 4 }}>
                            <Text size="sm" fw={500}>
                                Salary Per Month
                            </Text>
                            <Text size="sm" fw={500}>
                                ₹{salaryRange[0]}k – ₹{salaryRange[1]}k
                            </Text>
                        </Group>

                        <RangeSlider
                            min={50}
                            max={100}
                            value={salaryRange}
                            onChange={setSalaryRange}
                            color="dark"
                            style={{ width: 250 }}
                            styles={{
                                trackContainer: {
                                    inset: 0,
                                },
                                track: {
                                    height: 4,
                                    left: 0,
                                    right: 0,
                                },
                                thumb: {
                                    height: 12,
                                    width: 12,
                                },
                            }}
                        />
                    </Box>

                </Group>
            </Center>
        </Box>
    );
};

export default FilterBar;
