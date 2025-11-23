import type { Meta, StoryObj } from '@storybook/react'
import { action } from 'storybook/actions'

import { Button } from '@/components/button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    onClick: action('on-click'),
  },
} satisfies Meta<typeof Button>
export default meta
type Story = StoryObj<typeof meta>

// Primary Button
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Destructive Button',
    variant: 'destructive',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
  },
}
