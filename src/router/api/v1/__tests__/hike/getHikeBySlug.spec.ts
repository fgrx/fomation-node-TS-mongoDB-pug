import { describe, it, expect } from "vitest";

import getHikeBySlug from "../../hike/getHikeBySlug";
import { initAppForTesting } from "../initTests";

const runningApp = initAppForTesting(getHikeBySlug("/api/v1"));

describe("GET /api/v1/hikes/:slug", () => {
  it("should return on hike", async () => {
    const response = await runningApp.get("/api/v1/hikes/l-aulp-du-seuil");

    const titleToFind = "L'Aulp du Seuil";

    expect(response.status).toBe(200);
    expect(response.body.title).toBe(titleToFind);
  });

  it("should return a 404", async () => {
    const response = await runningApp.get(
      "/api/v1/hikes/rando-qui-nexiste-pas"
    );

    expect(response.status).toBe(404);
  });
});
