import { Request, Response } from "express";
import { hikeRepository } from "../../repositories/hikeRepository";
import { HikeDifficulty } from "../../interfaces/hike";

interface SearchParams {
  distanceMin?: number;
  distanceMax?: number;
  difficulty?: string | HikeDifficulty;
  isLoop?: string | boolean;
}

const searchQueryBuilder = (params: SearchParams): object => {
  const { distanceMin, distanceMax, difficulty, isLoop } = params;

  let query = {};

  if (isLoop === "on") Object.assign(query, { isLoop: true });
  if (isLoop && isLoop !== "on") Object.assign(query, { isLoop });

  if (difficulty) Object.assign(query, { difficulty });

  if (distanceMin || distanceMax) {
    let distance: { $gte?: number; $lte?: number } = {};

    if (distanceMin) distance.$gte = distanceMin;
    if (distanceMax) distance.$lte = distanceMax;

    Object.assign(query, { distance });
  }

  return query;
};

const hikeSearchController = async (req: Request, res: Response) => {
  const query = searchQueryBuilder(req.body);

  const hikes = await hikeRepository.searchHikes(query);

  res.render("search", { title: "Résultats de la recherche", hikes });
};

export { hikeSearchController, searchQueryBuilder };
