import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import AccountMenu from '../AccountMenu.vue'

const mockProps = {}

function factorySUT({ props = { ...mockProps } }) {
  const sut = mount(AccountMenu, { props })

  return { sut }
}

describe.concurrent('AccountMenu Component', () => {
  it('shound start with popover hide ', async () => {
    const { sut } = factorySUT({})
    expect(sut.classes()).not.toContain('is-opened')
  })

  it('shound render popover on click button', async () => {
    const { sut } = factorySUT({})
    const button = sut.find('button')
    await button.trigger('click')
    expect(sut.classes()).toContain('is-opened')
  })
})
