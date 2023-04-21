import { Request, Response } from "express";
import { Hike } from "../interfaces/hike";
import slugify from "slugify";
import { hikeRepository } from "../repositories/hikeRepository";

const hikeAddController = {
  displayForm: (req: Request, res: Response) => {
    const defaultHike: Hike = {
      title: "Randonnée à Ordonnaz",
      duration: 120,
      distance: 10,
      start: "Ordonnaz",
      postCode: 38450,
      difficulty: "medium",
      isLoop: true,
      description: "Magnifique randonnées avec des arbres et des ruisseaux.",
      date: new Date(),
      slug: "false-slug",
    };

    res.render("hikeAddForm", { defaultHike });
  },

  validateForm: (req: Request, res: Response) => {
    const {
      title,
      duration,
      distance,
      postCode,
      start,
      difficulty,
      isLoop,
      description,
    } = req.body;

    const newHike: Hike = {
      slug: slugify(`${title}-${Date.now()}`),
      title,
      duration,
      distance,
      postCode,
      start,
      difficulty,
      isLoop: isLoop === "on",
      description,
    };

    const createdHike = hikeRepository.addHike(newHike);
  },
};

export { hikeAddController };
