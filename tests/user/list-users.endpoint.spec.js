import request from "supertest";
import { app } from "../../routes.js";
import { StatusCodes } from "http-status-codes";

describe("List users", () => {
  it("should return a list of users", async () => {
    const response = await request(app).get("/user");
    expect(response.status).toBe(StatusCodes.OK);
    console.log(response.body, "BODY");
    expect(response.body.total).toBeGreaterThanOrEqual(0);
  });
});
