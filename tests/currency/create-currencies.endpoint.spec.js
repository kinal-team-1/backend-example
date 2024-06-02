import { StatusCodes } from "http-status-codes";
import request from "supertest";
import { app } from "../../routes.js";

describe("Create currency", () => {
  describe(`should return ${StatusCodes.BAD_REQUEST} when`, () => {
    it(`the name is not a string`, async () => {
      const response = await request(app)
        .post("/currency")
        .send({ symbol: 1, name: class X {}, key: "US" });
      expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    });

    it(`the key is not a string`, async () => {
      const response = await request(app)
        .post("/currency")
        .send({ symbol: "USD", name: "United States Dollar", key: Number.NaN });
      expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    });

    it(`the symbol is not a string`, async () => {
      const response = await request(app)
        .post("/currency")
        .send({ symbol: 1, name: "United States Dollar", key: "US" });
      expect(response.status).toBe(StatusCodes.BAD_REQUEST);
    });
  });

  it("should return 201 when creating a currency", async () => {
    const response = await request(app)
      .post("/currency")
      .send({ symbol: "USD", name: "United States Dollar", key: "US" });
    expect(response.status).toBe(StatusCodes.CREATED);
  });

  it(`should return ${StatusCodes.CONFLICT} when trying to create a currency that already exists`, async () => {
    const response = await request(app)
      .post("/currency")
      .send({ symbol: "USD", name: "United States Dollar", key: "US" });
    expect(response.status).toBe(StatusCodes.CREATED);

    const response2 = await request(app)
      .post("/currency")
      .send({ symbol: "USD", name: "United States Dollar", key: "US" });
    expect(response2.status).toBe(StatusCodes.BAD_REQUEST);
  });
});
