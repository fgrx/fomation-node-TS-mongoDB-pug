import { Router } from "express";
import slugify from "slugify";
import { hikeFormValidation } from "../../../../services/hikeFormValidation";
import { Hike } from "../../../../interfaces/hike";
import { hikeRepository } from "../../../../repositories/hikeRepository";
import { validateSchema } from "../../../../middlewares/validateSchema";
import { hikeValidationSchema } from "../../../../validationSchema/hikeValidation";

const addHike = (baseUrl: string) => {
  const router = Router();

  router.post(
    `${baseUrl}/hikes`,
    validateSchema(hikeValidationSchema),
    async (req, res) => {
      const hikeData = req.body;

      const newHike: Hike = { ...hikeData };
      newHike.slug = slugify(newHike.title);
      newHike.date = new Date();

      newHike.image = req.file
        ? `/public/uploads/${req.file.filename}`
        : undefined;

      const createdHike = await hikeRepository.addHike(newHike);

      if (createdHike) {
        res.status(201).json(createdHike);
      } else {
        res.status(500).json("Erreur d'ajout de la ressource");
      }
    }
  );

  return router;
};

export default addHike;
