// This file demonstrates Mantine components that can be used in Server Components
// No 'use client' directive needed

import {
  Container,
  Title,
  Text,
  Paper,
  Grid,
  Card,
  Badge,
  Stack,
  Group,
  Divider,
  Table,
  Code,
  Blockquote,
  Mark,
  Kbd,
  Box,
  Flex,
  Center,
  SimpleGrid,
  Avatar,
  ThemeIcon,
  Progress,
  RingProgress,
  Timeline,
  Breadcrumbs,
  Anchor,
  Image,
  AspectRatio,
  Space,
  Skeleton,
  Indicator,
  Notification,
  Alert,
  Highlight,
  Tabs,
  Stepper,
} from '@mantine/core';
import { ClientList } from './ClientList';
import {
  IconHome,
  IconUser,
  IconSettings,
  IconStar,
  IconCheck,
  IconPhoto,
} from '@tabler/icons-react';

export function MantineServerComponents() {
  const tableData = [
    { name: 'Carbon', symbol: 'C', mass: 12.011 },
    { name: 'Nitrogen', symbol: 'N', mass: 14.007 },
    { name: 'Oxygen', symbol: 'O', mass: 15.999 },
  ];

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Title order={1}>Server Component Compatible Mantine UI</Title>
        <Text c="dimmed">These components work without client-side JavaScript</Text>

        <Divider label="Typography" labelPosition="center" />
        <Paper shadow="xs" p="md">
          <Stack gap="md">
            <Title order={2}>Title Component</Title>
            <Text size="lg" fw={700}>Bold Text</Text>
            <Text c="dimmed">Dimmed Text</Text>
            <Highlight highlight="highlighted">This text is highlighted</Highlight>
            <Mark>Marked text</Mark>
            <Code>const code = 'example';</Code>
            <Kbd>Ctrl + K</Kbd>
            
            <Blockquote cite="– Mantine UI">
              This is a blockquote component from Mantine
            </Blockquote>

            <ClientList>
              <ClientList.Item>First item</ClientList.Item>
              <ClientList.Item>Second item</ClientList.Item>
              <ClientList.Item>Third item</ClientList.Item>
            </ClientList>
          </Stack>
        </Paper>

        <Divider label="Layout" labelPosition="center" />
        <Paper shadow="xs" p="md">
          <Stack gap="md">
            <Grid>
              <Grid.Col span={4}>
                <Paper p="md" bg="blue.1">Column 1</Paper>
              </Grid.Col>
              <Grid.Col span={4}>
                <Paper p="md" bg="green.1">Column 2</Paper>
              </Grid.Col>
              <Grid.Col span={4}>
                <Paper p="md" bg="red.1">Column 3</Paper>
              </Grid.Col>
            </Grid>

            <SimpleGrid cols={3} spacing="lg">
              <Paper p="md" bg="violet.1">Item 1</Paper>
              <Paper p="md" bg="cyan.1">Item 2</Paper>
              <Paper p="md" bg="pink.1">Item 3</Paper>
            </SimpleGrid>

            <Flex gap="md" align="center" justify="space-between">
              <Badge>Start</Badge>
              <Badge color="green">Center</Badge>
              <Badge color="red">End</Badge>
            </Flex>

            <Center h={100} bg="gray.1">
              <Text>Centered content</Text>
            </Center>

            <AspectRatio ratio={16 / 9}>
              <Paper bg="gray.2" h="100%" p="md">
                <Center h="100%">
                  <Text>16:9 Aspect Ratio</Text>
                </Center>
              </Paper>
            </AspectRatio>
          </Stack>
        </Paper>

        <Divider label="Data Display" labelPosition="center" />
        <Paper shadow="xs" p="md">
          <Stack gap="md">
            <Group>
              <Badge>Default</Badge>
              <Badge color="red">Error</Badge>
              <Badge color="green">Success</Badge>
              <Badge variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
                Gradient
              </Badge>
            </Group>
            
            <Alert title="Server Side Alert" color="blue" icon={<IconCheck />}>
              This alert is rendered on the server
            </Alert>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Box h={160} bg="gray.2">
                  <Center h="100%">
                    <Text c="dimmed">Image Placeholder</Text>
                  </Center>
                </Box>
              </Card.Section>
              <Group mt="md" mb="xs">
                <Text fw={500}>Static Card</Text>
                <Badge color="pink">Server Rendered</Badge>
              </Group>
              <Text size="sm" c="dimmed">
                This card is completely rendered on the server without any client-side JavaScript
              </Text>
            </Card>

            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Element</Table.Th>
                  <Table.Th>Symbol</Table.Th>
                  <Table.Th>Atomic mass</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {tableData.map((element) => (
                  <Table.Tr key={element.name}>
                    <Table.Td>{element.name}</Table.Td>
                    <Table.Td>{element.symbol}</Table.Td>
                    <Table.Td>{element.mass}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>

            <Timeline active={1}>
              <Timeline.Item title="Server Rendered">
                <Text c="dimmed" size="sm">This timeline is static</Text>
              </Timeline.Item>
              <Timeline.Item title="No JavaScript">
                <Text c="dimmed" size="sm">Works without client-side JS</Text>
              </Timeline.Item>
              <Timeline.Item title="SEO Friendly">
                <Text c="dimmed" size="sm">Great for SEO</Text>
              </Timeline.Item>
            </Timeline>
          </Stack>
        </Paper>

        <Divider label="Static Progress Indicators" labelPosition="center" />
        <Paper shadow="xs" p="md">
          <Stack gap="md">
            <Progress value={30} />
            <Progress value={60} color="green" striped />
            <Progress value={100} color="red" />

            <RingProgress
              sections={[
                { value: 40, color: 'cyan' },
                { value: 15, color: 'orange' },
                { value: 15, color: 'grape' },
              ]}
            />
          </Stack>
        </Paper>

        <Divider label="Static Navigation" labelPosition="center" />
        <Paper shadow="xs" p="md">
          <Stack gap="md">
            <Breadcrumbs>
              <Anchor href="/">Home</Anchor>
              <Anchor href="/products">Products</Anchor>
              <Anchor href="/category">Category</Anchor>
              <span>Current Page</span>
            </Breadcrumbs>

            <Tabs defaultValue="gallery">
              <Tabs.List>
                <Tabs.Tab value="gallery" leftSection={<IconPhoto size={16} />}>
                  Gallery
                </Tabs.Tab>
                <Tabs.Tab value="messages" leftSection={<IconUser size={16} />}>
                  Messages
                </Tabs.Tab>
                <Tabs.Tab value="settings" leftSection={<IconSettings size={16} />}>
                  Settings
                </Tabs.Tab>
              </Tabs.List>
            </Tabs>
          </Stack>
        </Paper>

        <Divider label="Icons and Avatars" labelPosition="center" />
        <Paper shadow="xs" p="md">
          <Group>
            <Avatar src={null} alt="User" color="blue">US</Avatar>
            <Avatar.Group>
              <Avatar src={null} alt="User 1" color="red">U1</Avatar>
              <Avatar src={null} alt="User 2" color="green">U2</Avatar>
              <Avatar src={null} alt="User 3" color="violet">U3</Avatar>
              <Avatar>+5</Avatar>
            </Avatar.Group>
            
            <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
              <IconStar size={20} />
            </ThemeIcon>
            
            <Indicator label="99+" size={16} inline>
              <ThemeIcon size="lg" radius="xl" color="gray">
                <IconHome size={20} />
              </ThemeIcon>
            </Indicator>
          </Group>
        </Paper>

        <Divider label="Loading States" labelPosition="center" />
        <Paper shadow="xs" p="md">
          <Stack gap="md">
            <Skeleton height={50} />
            <Skeleton height={8} radius="xl" />
            <Skeleton height={8} width="70%" radius="xl" />
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}