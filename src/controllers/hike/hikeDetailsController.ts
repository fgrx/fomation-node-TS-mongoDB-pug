import { Request, Response } from "express";
import { hikeRepository } from "../../repositories/hikeRepository";

const hikeDetailController = async (req: Request, res: Response) => {
  const slug = req.params.slug;
  const hike = await hikeRepository.getHikeBySlug(slug);

  if (!hike) {
    res.render("page", {
      title: "Randonnée non trouvée",
      content: "la page demandée n'existe pas",
    });
  } else {
    res.render("hikeDetails", { hike });
  }
};

export { hikeDetailController };
