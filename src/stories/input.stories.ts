import type { Meta, StoryObj } from '@storybook/react'
import { action } from 'storybook/actions'

import { Input } from '@/components/input'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    onChange: action('on-change'),
  },
} satisfies Meta<typeof Input>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
}
