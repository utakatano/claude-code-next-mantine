'use client';

import { List } from '@mantine/core';
import { ReactNode } from 'react';

interface ClientListProps {
  children: ReactNode;
  [key: string]: any;
}

export function ClientList({ children, ...props }: ClientListProps) {
  return <List {...props}>{children}</List>;
}

ClientList.Item = List.Item;