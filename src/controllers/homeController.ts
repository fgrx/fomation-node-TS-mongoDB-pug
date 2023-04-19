import { Request, Response } from "express";
import { hikeRepository } from "../repositories/hikeRepository";

const homeController = (req: Request, res: Response) => {
  const numberOfHikesToDisplay = 6;
  const welcomeMessage = "Bienvenue sur Rando38";
  const hikes = hikeRepository.getHikes(0, numberOfHikesToDisplay);
  res.render("index", { welcomeMessage, hikes });
};

export { homeController };
