import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

import TheHeader from './TheHeader.vue'

const meta = {
  title: 'Example/Header',
  component: TheHeader,
  render: (args: any) => ({
    components: { TheHeader },
    setup() {
      return { args }
    },
    template: '<TheHeader />',
  }),
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [vueRouter()],
  args: {},
  tags: ['autodocs'],
} satisfies Meta<typeof TheHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {},
}
