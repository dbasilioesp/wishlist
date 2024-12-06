import { listProducts } from "../../routes/api/products.mjs";

function factorySUT() {
  const sut = listProducts();
  return sut;
}

describe("listProducts", () => {
  // This test is not following the pattern Arrange/Act/Assert
  test("should return right metadata of list", () => {
    const products = factorySUT();
    expect(products.total).toBe(8);
    expect(products.pageSize).toBe(8);
    expect(products.totalPages).toBe(1);
  });

  test("should return right length of product", () => {
    const products = factorySUT();
    expect(products.products.length).toBe(8);
  });

  test("should return a right product type", () => {
    const products = factorySUT();
    const product = products.products[0];
    const keys = Object.keys(product);
    expect(keys).toEqual([
      "code",
      "name",
      "available",
      "visible",
      "details",
      "fullPriceInCents",
      "salePriceInCents",
      "rating",
      "image",
      "stockAvailable",
    ]);
  });
});
