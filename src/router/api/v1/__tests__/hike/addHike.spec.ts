import { describe, it, expect } from "vitest";
import addHike from "../../hike/addHike";
import { initAppForTesting } from "../initTests";
import { hikeRepository } from "../../../../../repositories/hikeRepository";
import { Hike } from "../../../../../interfaces/hike";

const route = addHike("/api/v1");
const runningApp = initAppForTesting(route);

let createdHike: Hike;

describe("POST api/v1/hikes", () => {
  it("Should post a new hike", async () => {
    const newHike: Hike = {
      title: "test hike with vitest and supertest",
      description: "ceci est une description de plus de 20 chr",
      difficulty: "medium",
      distance: 8,
      duration: 140,
      isLoop: true,
      start: "Chavigneu",
      postCode: 38316,
    };

    const response = await runningApp
      .post("/api/v1/hikes")
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .send(newHike);

    expect(response.status).toBe(201);
    createdHike = response.body;

    expect(response.body.title).toBe(newHike.title);

    if (createdHike.slug) await hikeRepository.deleteHike(createdHike.slug);
  });

  it("should trow and error", async () => {
    const wrongHike = {
      title: "Hike with not enough params",
    };

    const response = await runningApp.post("/api/v1/hikes").send(wrongHike);

    expect(response.status).toBe(422);
  });
});
