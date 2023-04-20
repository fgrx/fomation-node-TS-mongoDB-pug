import { Request, Response } from "express";
import { Hike } from "../interfaces/hike";
import { hikeRepository } from "../repositories/hikeRepository";

const hikesController = (req: Request, res: Response) => {
  const itemsPerPage = 6;
  const currentPage = parseInt(req.params.page) || 0;
  const start = currentPage * itemsPerPage;

  const totalHikesNumber = hikeRepository.getNumberOfHikes();
  const totalPages = Math.floor(totalHikesNumber / itemsPerPage);

  const hikes = hikeRepository.getHikes(start, itemsPerPage);

  const prevPage = currentPage >= 1 ? `/hikes/${currentPage - 1}` : false;
  const nextPage =
    currentPage < totalPages ? `/hikes/${currentPage + 1}` : false;

  res.render("hikes", {
    title: "Liste des randonnées",
    hikes,
    prevPage,
    nextPage,
  });
};

export { hikesController };
