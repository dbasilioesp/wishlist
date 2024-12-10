import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/vue3'
import { vueRouter } from 'storybook-vue3-router'

import ProductCard from '@/components/ProductCard.vue'
import ProductImage from '@/assets/images/product.jpg'

const meta = {
  title: 'App/ProductCard',
  component: ProductCard,
  render: (args: any) => ({
    components: { ProductCard },
    setup() {
      return { args }
    },
    template: '<ProductCard v-bind="args" />',
  }),
  parameters: {
    layout: 'padded',
  },
  decorators: [vueRouter()],
  args: {
    title: 'Tênis Adidas Breaknet Femimino',
    fullPrice: '30080',
    salePrice: '39980',
    image: ProductImage,
    unlockSize: false,
    wished: false,
    rating: 4.5,
    description:
      'Carregamos o Revolution 7 com o tipo de amortecimento e suporte macio que pode mudar o seu mundo de corrida. Elegante como sempre, confortvel quando a borracha encontra a estrada e performtico para o ritmo desejado, uma evoluo de um favorito dos fs que oferece uma conduo macia e suave.',
    onWishlist: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {},
}

export const DropMode: Story = {
  args: {
    dropMode: true,
  },
}
