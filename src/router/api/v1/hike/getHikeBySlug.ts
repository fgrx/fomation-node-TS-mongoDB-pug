import { Response, Router, Request } from "express";
import { hikeRepository } from "../../../../repositories/hikeRepository";

const getHikeBySlug = (baseUrl: string): Router => {
  const router = Router();

  router.get(`${baseUrl}/hikes/:slug`, async (req: Request, res: Response) => {
    const { slug } = req.params;
    const hike = await hikeRepository.getHikeBySlug(slug);

    if (hike) {
      res.json(hike);
    } else {
      res.status(404).json("La randonnée demandée n'existe pas");
    }
  });

  return router;
};

export default getHikeBySlug;
