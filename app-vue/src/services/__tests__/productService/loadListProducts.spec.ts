import { describe, it, expect, vi } from 'vitest'
import { loadListProducts } from '../../productService'

const mockA = { code: 'A1', name: 'Product A', visible: true }
const mockB = { code: 'A2', name: 'Product B', visible: true }
const defaultResponse = { products: [mockA, mockB] }

// SUT - Subject Under Test
async function factorySUT({ response = defaultResponse }) {
  vi.stubGlobal(
    'fetch',
    vi.fn(() => ({
      json: () => response,
    })),
  )

  const sut = await loadListProducts()

  return { sut, response }
}

describe.concurrent('Product Service', () => {
  it('should return products on loadListProducts', async () => {
    const { sut, response } = await factorySUT({})

    expect(sut).toBeDefined()
    expect(sut.products).toBeDefined()
    expect(sut.products.length).toBe(response.products.length)
  })

  it('should return only products that are visible', async () => {
    const mockA = { code: 'A1', name: 'Product A', visible: true }
    const mockB = { code: 'A2', name: 'Product B', visible: false }
    const response = { products: [mockA, mockB] }

    const { sut } = await factorySUT({ response })

    expect(sut.products.length).toBe(1)
  })
})
