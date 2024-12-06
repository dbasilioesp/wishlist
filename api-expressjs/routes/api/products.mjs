import express from "express";
import products from "../../mocks/mock-products.json" with { type: "json" };

const router = express.Router();

export function listProducts() {
  return products;
}

/* GET products listing. */
router.get("/", function (req, res, next) {
  const products = listProducts();
  res.json(products);
});

export default router;
