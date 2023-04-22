import { describe, it, expect } from "vitest";

import getHikes from "../../hike/getHikes";
import { initAppForTesting } from "../initTests";

const runningApp = initAppForTesting(getHikes("/api/v1"));

describe("GET api/v1/hikes", () => {
  it("should return a list of hikes", async () => {
    const response = await runningApp.get("/api/v1/hikes");

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(2);
  });
});
