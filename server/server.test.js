const app = require("server");
const request = require("supertest");

describe("GET /api/menu", () => {
  const testURl = "/api/menu";
  test("return response in text/html with utf-8 encoding", (done) => {
    request(app)
      .get(testURl)
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200, done);
  });
});
