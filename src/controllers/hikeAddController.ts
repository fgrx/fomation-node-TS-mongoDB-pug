import { Request, Response } from "express";
import { Hike } from "../interfaces/hike";
import slugify from "slugify";
import { hikeRepository } from "../repositories/hikeRepository";
import { AlertMessage } from "../interfaces/AlertMessage";
import { hikeFormValidation } from "../services/hikeFormValidation";

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
      image: "",
      slug: "false-slug",
    };

    res.render("hikeAddForm", { defaultHike });
  },

  validateForm: async (req: Request, res: Response) => {
    const { isFormValid, formErrors } = hikeFormValidation(req.body);

    if (!isFormValid) {
      const message: AlertMessage = {
        title: "Erreur de saisie dans le formulaire",
        description: "Les champs suivants présentent une erreur :",
        type: "error",
        errors: formErrors,
      };

      res.render("hikeAddForm", { message, defaultHike: req.body });

      return false;
    }

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
      image: req.file ? `/public/uploads/${req.file.filename}` : undefined,
    };

    const createdHike = await hikeRepository.addHike(newHike);

    const message: AlertMessage = {
      title: "Randonnée enregistrée !",
      description: "Votre randonnée a été ajoutée avec succès",
      type: "success",
    };

    if (!createdHike) {
      message.title = "Une erreur s'est produite";
      message.description =
        "Une erreur s'est produite pendant l'enregistrement. Veuillez contacter l'administrateur.";
      message.type = "error";
    }

    res.render("hikeAddForm", { message, defaultHike: newHike });
  },
};

export { hikeAddController };
