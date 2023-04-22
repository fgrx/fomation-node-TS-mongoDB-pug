import { Router } from "express";
import { hikeRepository } from "../../../../repositories/hikeRepository";

const getHikes = (baseUrl: string): Router => {
  const router = Router();

  router.get(`${baseUrl}/hikes`, async (req, res) => {
    const start = parseInt(req.query.start as string) || 0;
    const limit = parseInt(req.query.limit as string) || 20;

    const hikes = await hikeRepository.getHikes(start, limit);

    res.json(hikes);
  });

  return router;
};

export default getHikes;
