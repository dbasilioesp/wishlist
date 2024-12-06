import request from "supertest";
import app from "../../app.mjs";

const ENDPOINT = "/api/products";

function factorySUT({ method = "get", endpoint = ENDPOINT }) {
  return request(app)
    [method](endpoint)
    .set("Accept", "application/json")
    .expect("Content-Type", /json/);
}

describe("GET " + ENDPOINT, () => {
  test("should status be 200", function (done) {
    const req = factorySUT({});
    req.expect(200, done);
  });

  test("should return a list of products", function () {
    const req = factorySUT({});
    return req.expect(200).then((res) => {
      expect(res.body.products).toBeDefined();
    });
  });
});
