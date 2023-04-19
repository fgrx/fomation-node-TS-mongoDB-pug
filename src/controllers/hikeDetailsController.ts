import { Request, Response } from "express";
import { hikeRepository } from "../repositories/hikeRepository";

const hikeDetailController = (req: Request, res: Response) => {
  const slug = req.params.slug;
  const hike = hikeRepository.getHikeBySlug(slug);
  res.render("hikeDetails", { hike });
};

export { hikeDetailController };
