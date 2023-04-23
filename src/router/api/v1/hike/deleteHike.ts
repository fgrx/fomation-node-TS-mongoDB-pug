import { Router } from "express";
import { hikeRepository } from "../../../../repositories/hikeRepository";

const deleteHike = (baseUrl: string) => {
  const router = Router();

  router.delete(`${baseUrl}/hikes/:slug`, async (req, res) => {
    const { slug } = req.params;
    const result = await hikeRepository.deleteHike(slug);

    console.log("______________", result);

    if (result) {
      res.status(200).json(slug);
    } else {
      res.status(404).json("Hike not found");
    }
  });

  return router;
};

export default deleteHike;
