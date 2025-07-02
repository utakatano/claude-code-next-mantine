'use client';

import { useState } from 'react';
import {
  Button,
  Group,
  TextInput,
  NumberInput,
  Select,
  MultiSelect,
  Checkbox,
  Radio,
  Switch,
  Slider,
  RangeSlider,
  SegmentedControl,
  ColorPicker,
  Card,
  Text,
  Badge,
  Paper,
  Container,
  Grid,
  Stack,
  Divider,
  Alert,
  Loader,
  Progress,
  Rating,
  Timeline,
  Tabs,
  Accordion,
  Modal,
  Drawer,
  Tooltip,
  Popover,
  Menu,
  Avatar,
  Indicator,
  Spoiler,
  Blockquote,
  Code,
  Table,
  Title,
  List,
  ThemeIcon,
  ActionIcon,
  CloseButton,
  CopyButton,
  FileButton,
  UnstyledButton,
  Affix,
  Breadcrumbs,
  Burger,
  Pagination,
  Stepper,
  Tabs as TabsComponent,
  NavLink,
  ScrollArea,
  PasswordInput,
  Textarea,
  JsonInput,
  FileInput,
  Autocomplete,
  TagsInput,
  PillsInput,
  Pill,
  Combobox,
  useCombobox,
  PinInput,
  HoverCard,
  Anchor,
  Mark,
  Highlight,
  Kbd,
  Notification,
  Skeleton,
  Space,
  VisuallyHidden,
  Box,
  Center,
  Flex,
  SimpleGrid,
  AspectRatio,
  Image,
  BackgroundImage,
  Overlay,
  LoadingOverlay,
  TypographyStylesProvider,
  Dialog,
  FocusTrap,
  Portal,
  Transition,
  NativeSelect,
  Fieldset,
  AppShell,
  RingProgress,
  Chip,
  ChipGroup,
  FloatingIndicator,
  NumberFormatter,
  Tree,
  SemiCircleProgress,
  rem,
} from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useDisclosure, useCounter, useToggle } from '@mantine/hooks';
import {
  IconHome,
  IconUser,
  IconSettings,
  IconSearch,
  IconHeart,
  IconStar,
  IconCheck,
  IconX,
  IconChevronRight,
  IconPhoto,
  IconDownload,
  IconArrowRight,
  IconExternalLink,
} from '@tabler/icons-react';

export function MantineSamples() {
  const [opened, { open, close }] = useDisclosure(false);
  const [drawerOpened, { open: openDrawer, close: closeDrawer }] = useDisclosure(false);
  const [value, setValue] = useState('react');
  const [sliderValue, setSliderValue] = useState(50);
  const [rangeValue, setRangeValue] = useState<[number, number]>([20, 80]);
  const [color, setColor] = useState('#ffffff');
  const [rating, setRating] = useState(3);
  const [active, setActive] = useState(0);
  const count = useCounter(0);
  const [toggleValue, toggle] = useToggle(['blue', 'red']);
  const [popoverOpened, setPopoverOpened] = useState(false);
  const combobox = useCombobox();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(30);

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      age: 18,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const showNotification = () => {
    notifications.show({
      title: 'Notification',
      message: 'This is a Mantine notification!',
      color: 'blue',
    });
  };

  const tableData = [
    { name: 'Carbon', symbol: 'C', mass: 12.011 },
    { name: 'Nitrogen', symbol: 'N', mass: 14.007 },
    { name: 'Oxygen', symbol: 'O', mass: 15.999 },
  ];

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <Title order={1}>Mantine UI Components Sample</Title>

        <Divider label="Buttons & Actions" labelPosition="center" />
        <Paper shadow="xs" p="md">
          <Stack gap="md">
            <Group>
              <Button>Default</Button>
              <Button variant="filled" color="blue">Filled</Button>
              <Button variant="light" color="green">Light</Button>
              <Button variant="outline" color="red">Outline</Button>
              <Button variant="subtle" color="violet">Subtle</Button>
              <Button variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
                Gradient
              </Button>
              <Button loading>Loading</Button>
            </Group>
            <Group>
              <ActionIcon variant="filled" color="blue">
                <IconHeart size={16} />
              </ActionIcon>
              <CloseButton />
              <CopyButton value="Hello, Mantine!">
                {({ copied, copy }) => (
                  <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
                    {copied ? 'Copied!' : 'Copy'}
                  </Button>
                )}
              </CopyButton>
            </Group>
          </Stack>
        </Paper>

        <Divider label="Form Inputs" labelPosition="center" />
        <Paper shadow="xs" p="md">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Stack gap="md">
              <TextInput
                label="Name"
                placeholder="Your name"
                {...form.getInputProps('name')}
              />
              <TextInput
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps('email')}
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
              />
              <NumberInput
                label="Age"
                placeholder="Your age"
                {...form.getInputProps('age')}
              />
              <Select
                label="Framework"
                placeholder="Pick one"
                data={['React', 'Angular', 'Vue', 'Svelte']}
              />
              <MultiSelect
                label="Technologies"
                placeholder="Pick technologies"
                data={['React', 'Angular', 'Vue', 'Svelte', 'Next.js', 'Nuxt.js']}
              />
              <Textarea
                label="Bio"
                placeholder="Tell us about yourself"
                rows={4}
              />
              <Autocomplete
                label="Country"
                placeholder="Start typing..."
                data={['United States', 'Canada', 'Mexico', 'Japan', 'Germany']}
              />
              <TagsInput
                label="Tags"
                placeholder="Enter tag"
                data={['React', 'Angular', 'Vue']}
              />
              <PinInput length={6} />
              <Group>
                <Checkbox label="I agree to terms" />
                <Switch label="Enable notifications" />
              </Group>
              <Radio.Group
                name="favoriteFramework"
                label="Select your favorite framework"
              >
                <Stack mt="xs">
                  <Radio value="react" label="React" />
                  <Radio value="svelte" label="Svelte" />
                  <Radio value="angular" label="Angular" />
                </Stack>
              </Radio.Group>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </Paper>

        <Divider label="Sliders & Controls" labelPosition="center" />
        <Paper shadow="xs" p="md">
          <Stack gap="md">
            <div>
              <Text size="sm" mb="xs">Slider: {sliderValue}</Text>
              <Slider
                value={sliderValue}
                onChange={setSliderValue}
                marks={[
                  { value: 20, label: '20' },
                  { value: 50, label: '50' },
                  { value: 80, label: '80' },
                ]}
              />
            </div>
            <div>
              <Text size="sm" mb="xs">Range Slider: {rangeValue[0]} - {rangeValue[1]}</Text>
              <RangeSlider
                value={rangeValue}
                onChange={setRangeValue}
              />
            </div>
            <div>
              <Text size="sm" mb="xs">Color Picker</Text>
              <ColorPicker value={color} onChange={setColor} />
            </div>
            <SegmentedControl
              value={value}
              onChange={setValue}
              data={[
                { label: 'React', value: 'react' },
                { label: 'Angular', value: 'angular' },
                { label: 'Vue', value: 'vue' },
              ]}
            />
            <Rating value={rating} onChange={setRating} />
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
            
            <Alert title="Alert title" color="blue" icon={<IconCheck />}>
              This is a Mantine alert with an icon
            </Alert>

            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
                  height={160}
                  alt="Norway"
                />
              </Card.Section>
              <Group mt="md" mb="xs">
                <Text fw={500}>Norway Fjord Adventures</Text>
                <Badge color="pink">On Sale</Badge>
              </Group>
              <Text size="sm" c="dimmed">
                With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway
              </Text>
            </Card>

            <Accordion>
              <Accordion.Item value="item-1">
                <Accordion.Control>How does it work?</Accordion.Control>
                <Accordion.Panel>It works by using React components.</Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="item-2">
                <Accordion.Control>Is it customizable?</Accordion.Control>
                <Accordion.Panel>Yes, highly customizable with theme support.</Accordion.Panel>
              </Accordion.Item>
            </Accordion>

            <Timeline active={1}>
              <Timeline.Item title="New branch">
                <Text c="dimmed" size="sm">You created new branch</Text>
              </Timeline.Item>
              <Timeline.Item title="Commits">
                <Text c="dimmed" size="sm">You pushed 3 commits</Text>
              </Timeline.Item>
              <Timeline.Item title="Pull request">
                <Text c="dimmed" size="sm">You submitted a pull request</Text>
              </Timeline.Item>
            </Timeline>

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
          </Stack>
        </Paper>

        <Divider label="Navigation" labelPosition="center" />
        <Paper shadow="xs" p="md">
          <Stack gap="md">
            <Tabs value="gallery">
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
              <Tabs.Panel value="gallery" pt="xs">
                Gallery tab content
              </Tabs.Panel>
              <Tabs.Panel value="messages" pt="xs">
                Messages tab content
              </Tabs.Panel>
              <Tabs.Panel value="settings" pt="xs">
                Settings tab content
              </Tabs.Panel>
            </Tabs>

            <Breadcrumbs>
              <Anchor href="#">Home</Anchor>
              <Anchor href="#">Products</Anchor>
              <Anchor href="#">Category</Anchor>
              <span>Item</span>
            </Breadcrumbs>

            <Pagination total={10} />

            <Stepper active={active} onStepClick={setActive}>
              <Stepper.Step label="First step" description="Create an account">
                Step 1 content
              </Stepper.Step>
              <Stepper.Step label="Second step" description="Verify email">
                Step 2 content
              </Stepper.Step>
              <Stepper.Step label="Final step" description="Get full access">
                Step 3 content
              </Stepper.Step>
            </Stepper>

            <NavLink
              href="#required-for-focus"
              label="With icon"
              leftSection={<IconHome size={16} />}
            />
            <NavLink
              href="#required-for-focus"
              label="With right section"
              leftSection={<IconUser size={16} />}
              rightSection={<IconChevronRight size={16} />}
            />
          </Stack>
        </Paper>

        <Divider label="Feedback & Overlays" labelPosition="center" />
        <Paper shadow="xs" p="md">
          <Stack gap="md">
            <Group>
              <Loader />
              <Loader color="red" type="bars" />
              <Loader color="green" type="dots" />
            </Group>

            <Progress value={progress} />
            <Progress value={60} color="green" striped animated />

            <RingProgress
              sections={[
                { value: 40, color: 'cyan' },
                { value: 15, color: 'orange' },
                { value: 15, color: 'grape' },
              ]}
            />

            <Group>
              <Button onClick={open}>Open Modal</Button>
              <Button onClick={openDrawer}>Open Drawer</Button>
              <Button onClick={showNotification}>Show Notification</Button>
            </Group>

            <Group>
              <Tooltip label="Tooltip">
                <Button>Hover me</Button>
              </Tooltip>
              
              <Menu>
                <Menu.Target>
                  <Button>Menu</Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item leftSection={<IconSettings size={14} />}>Settings</Menu.Item>
                  <Menu.Item leftSection={<IconUser size={14} />}>Profile</Menu.Item>
                  <Menu.Divider />
                  <Menu.Item color="red" leftSection={<IconX size={14} />}>Delete</Menu.Item>
                </Menu.Dropdown>
              </Menu>

              <Popover opened={popoverOpened} onChange={setPopoverOpened}>
                <Popover.Target>
                  <Button onClick={() => setPopoverOpened((o) => !o)}>
                    Toggle popover
                  </Button>
                </Popover.Target>
                <Popover.Dropdown>
                  <Text size="sm">This is a popover</Text>
                </Popover.Dropdown>
              </Popover>

              <HoverCard>
                <HoverCard.Target>
                  <Button>Hover card</Button>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <Text size="sm">This appears on hover</Text>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>

            <Skeleton height={50} />
          </Stack>
        </Paper>

        <Divider label="Typography & Layout" labelPosition="center" />
        <Paper shadow="xs" p="md">
          <Stack gap="md">
            <Title order={2}>Title Component</Title>
            <Text size="lg" fw={700}>Bold Text</Text>
            <Text c="dimmed">Dimmed Text</Text>
            <Highlight highlight="highlighted">This text is highlighted</Highlight>
            <Mark>Marked text</Mark>
            <Code>const code = 'example';</Code>
            <Code>inline code</Code>
            <Kbd>Ctrl + K</Kbd>
            
            <Blockquote cite="– Mantine UI">
              This is a blockquote component from Mantine
            </Blockquote>

            <List>
              <List.Item>First item</List.Item>
              <List.Item>Second item</List.Item>
              <List.Item>Third item</List.Item>
            </List>

            <Spoiler maxHeight={50} showLabel="Show more" hideLabel="Hide">
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Text>
            </Spoiler>
          </Stack>
        </Paper>

        <Divider label="Layout Components" labelPosition="center" />
        <Paper shadow="xs" p="md">
          <Stack gap="md">
            <Grid>
              <Grid.Col span={4}>
                <Paper p="md" bg="blue.1">Col 1</Paper>
              </Grid.Col>
              <Grid.Col span={4}>
                <Paper p="md" bg="green.1">Col 2</Paper>
              </Grid.Col>
              <Grid.Col span={4}>
                <Paper p="md" bg="red.1">Col 3</Paper>
              </Grid.Col>
            </Grid>

            <SimpleGrid cols={3} spacing="lg">
              <Paper p="md" bg="violet.1">Item 1</Paper>
              <Paper p="md" bg="cyan.1">Item 2</Paper>
              <Paper p="md" bg="pink.1">Item 3</Paper>
            </SimpleGrid>

            <Flex gap="md" align="center" justify="space-between">
              <Badge>Flex Start</Badge>
              <Badge>Flex Center</Badge>
              <Badge>Flex End</Badge>
            </Flex>

            <Center h={100} bg="gray.1">
              <Text>Centered content</Text>
            </Center>

            <Group>
              <Avatar src={null} alt="User" color="blue">US</Avatar>
              <Avatar.Group>
                <Avatar src={null} alt="User 1">U1</Avatar>
                <Avatar src={null} alt="User 2">U2</Avatar>
                <Avatar src={null} alt="User 3">U3</Avatar>
                <Avatar>+5</Avatar>
              </Avatar.Group>
            </Group>

            <Group>
              <Indicator label="New" size={16}>
                <Button>Messages</Button>
              </Indicator>
              <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
                <IconStar size={20} />
              </ThemeIcon>
            </Group>

            <AspectRatio ratio={16 / 9}>
              <Paper bg="gray.1" h="100%" p="md">
                <Center h="100%">
                  <Text>16:9 Aspect Ratio</Text>
                </Center>
              </Paper>
            </AspectRatio>

            <ChipGroup>
              <Group>
                <Chip value="react">React</Chip>
                <Chip value="vue">Vue</Chip>
                <Chip value="angular">Angular</Chip>
              </Group>
            </ChipGroup>

            <ScrollArea h={100} type="always">
              <Box p="md">
                <Text>Scrollable content</Text>
                <Text>Line 2</Text>
                <Text>Line 3</Text>
                <Text>Line 4</Text>
                <Text>Line 5</Text>
                <Text>Line 6</Text>
                <Text>Line 7</Text>
                <Text>Line 8</Text>
              </Box>
            </ScrollArea>
          </Stack>
        </Paper>

        <Divider label="Dates & Calendar" labelPosition="center" />
        <Paper shadow="xs" p="md">
          <Calendar />
        </Paper>

        <Modal opened={opened} onClose={close} title="Modal Title">
          <Text>This is a modal content</Text>
          <Group mt="md">
            <Button onClick={close}>Close</Button>
          </Group>
        </Modal>

        <Drawer opened={drawerOpened} onClose={closeDrawer} title="Drawer Title">
          <Text>This is drawer content</Text>
        </Drawer>
      </Stack>
    </Container>
  );
}