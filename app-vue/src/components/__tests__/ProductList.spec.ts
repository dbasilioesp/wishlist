import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductsList from '../ProductsList.vue'

const mockProps = {
  showEmpty: true,
}

function factorySUT({ props = { ...mockProps } }) {
  const sut = mount(ProductsList, { props })

  return { sut }
}

describe.concurrent('Product List Component', () => {
  it('shound render empty message', async () => {
    const { sut } = factorySUT({})
    expect(sut.text()).toContain('Não foi encontrado nenhum produto')
  })
})
