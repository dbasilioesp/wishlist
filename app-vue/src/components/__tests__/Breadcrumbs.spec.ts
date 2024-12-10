import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TheBreadcrumbs from '../TheBreadcrumbs.vue'

const crumbA = { path: '/crumb-a', label: 'CrumbA' }
const mockProps = {
  crumbs: [crumbA],
}

function factorySUT({ props = { ...mockProps } }) {
  const sut = mount(TheBreadcrumbs, {
    props,
    global: {
      stubs: ['RouterLink'],
    },
  })

  return { sut }
}

describe.concurrent('Breadcrumbs Component', () => {
  it('shound render crumbs', async () => {
    const { sut } = factorySUT({})
    expect(sut.text()).toContain('Home')
    expect(sut.text()).toContain('CrumbA')
  })

  it('shound render new crumb', async () => {
    const crumbB = { path: '/crumb-b', label: 'CrumbB' }
    const props = { ...mockProps, crumbs: [crumbA, crumbB] }
    const { sut } = factorySUT({ props })
    const el = sut.find('routerlink:last-child')

    expect(el.text()).toContain('CrumbB')
    expect(el.attributes('to')).toEqual('/crumb-b')
    expect(el.classes()).toContain('is-current')
  })
})
