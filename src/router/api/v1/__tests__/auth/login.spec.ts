import { describe, it } from "vitest";
import { expect } from "vitest";
import login from "../../auth/login";
import { initAppForTesting } from "../initTests";

const baseUrl = "/api/v1";

const route = login(baseUrl);
const runningApp = initAppForTesting(route);

describe(">>>>>> Login", () => {
  it("should return a user with a token", async () => {
    const correctCredentials = {
      email: "admin@gmail.com",
      password: "12345",
    };
    const tokenMinLength = 10;

    const response = await runningApp
      .post(`${baseUrl}/auth/login`)
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send(correctCredentials);

    const auth = response.body;

    expect(auth.email).toBe(correctCredentials.email);
    expect(auth.token.length).toBeGreaterThan(tokenMinLength);
  });

  it("should fail", async () => {
    const wrongCredentials = { email: "admin@gmail.com", password: "123456" };

    const response = await runningApp
      .post(`${baseUrl}/auth/login`)
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send(wrongCredentials);

    expect(response.status).toBe(401);
  });
});
