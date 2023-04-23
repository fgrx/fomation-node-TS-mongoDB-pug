import { describe, expect, it, beforeEach } from "vitest";
import deleteHike from "../../hike/deleteHike";
import { initAppForTesting } from "../initTests";
import { Hike } from "../../../../../interfaces/hike";
import { hikeRepository } from "../../../../../repositories/hikeRepository";

const baseUrl = "/api/v1";
const route = deleteHike(baseUrl);
const runningApp = initAppForTesting(route);

describe(">>>>>> DeleteHike ", async () => {
  const fakeHike: Hike = {
    slug: "fakeHike",
    title: "this is a fake hike",
    description: "this is a description",
    duration: 5,
    distance: 5,
    start: "fake",
    postCode: 38600,
    difficulty: "easy",
    isLoop: false,
  };

  it("should return a status code 200 when deleting", async () => {
    await hikeRepository.addHike(fakeHike);
    const result = await runningApp.delete(`${baseUrl}/hikes/${fakeHike.slug}`);

    expect(result.status).toBe(200);
  });

  it("should return an error when unknow slug doen't exist", async () => {
    const nonExistingSlug = "non-existing-slug";
    const result = await runningApp.delete(
      `${baseUrl}/hikes/${nonExistingSlug}`
    );

    expect(result.status).toBe(404);
  });
});
