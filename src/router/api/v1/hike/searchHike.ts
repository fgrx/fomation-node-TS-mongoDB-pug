import { Router } from "express";
import { HikeDifficulty } from "../../../../interfaces/hike";
import { hikeRepository } from "../../../../repositories/hikeRepository";
import { searchQueryBuilder } from "../../../../controllers/hike/hikeSearchController";

const searchHikes = (baseUrl: string): Router => {
  const router = Router();

  router.get(`${baseUrl}/search`, async (req, res) => {
    const query = searchQueryBuilder(req.query);

    const results = await hikeRepository.searchHikes(query);
    res.json(results);
  });

  return router;
};

export default searchHikes;
