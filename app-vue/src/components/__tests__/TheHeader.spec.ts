import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TheHeader from '../layouts/TheHeader.vue'

const mockProps = {}

function factorySUT({ props = { ...mockProps } }) {
  const sut = mount(TheHeader, {
    props,
    global: {
      stubs: ['RouterLink'],
    },
  })

  return { sut }
}

describe.concurrent('TheHeader Component', () => {
  it('shound render the logo ', async () => {
    const { sut } = factorySUT({})
    const logo = sut.find('.header__logoLink')

    expect(logo.exists()).toBeTruthy()
    expect(logo.attributes('to')).toEqual('/')
  })

  it('shound render link to wishlist ', async () => {
    const { sut } = factorySUT({})
    const link = sut.find('.header__wishlistLink')

    expect(link.exists()).toBeTruthy()
    expect(link.attributes('to')).toEqual('/wishlist')
  })

  it('shound render account menu ', async () => {
    const { sut } = factorySUT({})
    const menu = sut.find('.header__accountMenu')

    expect(menu.exists()).toBeTruthy()
    expect(menu.html()).toContain('Entrar')
  })
})
