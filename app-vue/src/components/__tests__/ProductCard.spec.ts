import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductCard from '../ProductCard.vue'

const mockProps = {
  title: 'Product A',
  description: '...',
  image: '/path-to-image',
  fullPrice: '39980',
  salePrice: '30080',
  rating: 4.5,
  wished: false,
}

function factorySUT({ props = { ...mockProps } }) {
  const sut = mount(ProductCard, { props })

  return { sut }
}

describe.concurrent('Product Card Component', () => {
  it('shound render title', async () => {
    const { sut } = factorySUT({})
    expect(sut.text()).toContain(mockProps.title)
  })

  it('should render right prices', () => {
    const { sut } = factorySUT({})
    const fullPrice = sut.find('.productCard__fullPrice')
    const salePrice = sut.find('.productCard__salePrice')

    expect(fullPrice.text()).toMatch(/R\$.399,80/)
    expect(salePrice.text()).toMatch(/R\$.300,80/)
  })

  it('should render right colored stars', () => {
    // rating 4.5
    const { sut } = factorySUT({})
    const stars = sut.findAll('.stars svg.is-active')
    expect(stars.length).toBe(4)
  })

  it('should emit event wishlist on click wish button', () => {
    const { sut } = factorySUT({})
    const button = sut.find('.productCard__wishButton')
    button.trigger('click')

    expect(sut.emitted()).toHaveProperty('wishlist')
  })

  it('should render wished mode', () => {
    const props = { ...mockProps, wished: true }
    const { sut } = factorySUT({ props })

    expect(sut.classes()).toContain('wished')
  })

  it('should render drop mode', () => {
    const props = { ...mockProps, dropMode: true }
    const { sut } = factorySUT({ props })
    const button = sut.find('.productCard__wishButton')

    expect(button.classes()).toContain('is-dropmode')
  })
})
