import { MantineSamples } from '@/components/MantineSamples';
import Link from 'next/link';
import { Container, Stack, Title, Text, Button, Group, Paper } from '@mantine/core';

export default function Home() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Title order={1}>Mantine UI with Next.js</Title>
        <Text size="lg" c="dimmed">
          Choose between client-side interactive components or server-side static components
        </Text>
        
        <Group>
          <Paper shadow="xs" p="xl" radius="md" withBorder>
            <Stack gap="md">
              <Title order={3}>Client Components</Title>
              <Text c="dimmed">
                Interactive components with state management, event handlers, and animations
              </Text>
              <Button component={Link} href="/client" variant="filled">
                View Client Components
              </Button>
            </Stack>
          </Paper>
          
          <Paper shadow="xs" p="xl" radius="md" withBorder>
            <Stack gap="md">
              <Title order={3}>Server Components</Title>
              <Text c="dimmed">
                Static components that render on the server without JavaScript
              </Text>
              <Button component={Link} href="/server" variant="outline">
                View Server Components
              </Button>
            </Stack>
          </Paper>
        </Group>
      </Stack>
    </Container>
  );
}