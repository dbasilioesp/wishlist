import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

import TheBreadcrumbs from './TheBreadcrumbs.vue'

const meta = {
  title: 'Example/Breadcrumbs',
  component: TheBreadcrumbs,
  render: (args: any) => ({
    components: { TheBreadcrumbs },
    setup() {
      return { args }
    },
    template: '<TheBreadcrumbs v-bind="args" />',
  }),
  parameters: {
    layout: 'padded',
  },
  decorators: [vueRouter()],
  args: {
    links: [
      {
        path: '/wishlist',
        label: 'Wishlist',
      },
    ],
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TheBreadcrumbs>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {},
}
