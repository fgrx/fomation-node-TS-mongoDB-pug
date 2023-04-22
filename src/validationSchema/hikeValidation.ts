import Joi from "joi";

const hikeValidationSchema = Joi.object({
  title: Joi.string().min(5).required().messages({
    "any.required": "Le titre est obligatoire",
    "string.min": "Le titre doit faire plus de 5 caractères",
    "string.empty": "Le titre est obligatoire",
  }),
  description: Joi.string().required().min(20).messages({
    "any.required": "La description est obligatoire",
    "string.min": "La description doit faire plus de 20 caractères",
    "string.empty": "La description doit être remplie",
  }),
  postCode: Joi.number().min(9999).max(99999).required().messages({
    "any.required": "Le code postal est obligatoire",
    "string.empty": "Le code postal doit être renseigné",
    "string.min": "Le code postal doit comporter 5 nombres",
    "string.max": "Le code postal doit comporter 5 nombres",
  }),
  start: Joi.string().min(3).required().messages({
    "any.required": "La ville de départ est obligatoire",
    "string.empty": "La ville de départ doit être renseignée",
    "string.min": "La ville de départ doit avoir au moins 3 caractères",
  }),
  duration: Joi.number().min(15).integer().messages({
    "number.base": "La durée en minutes de la randonnée est requise",
    "number.min": "Une randonnée doit faire plus de 15 minutes",
    "number.integer":
      "La durée en minutes de la randonnée est requise (sans virgules)",
  }),
  distance: Joi.number().integer().min(2).required().messages({
    "any.required": "La distance doit être saisie",
    "number.base": "La distance en km est requise",
    "number.min": "La distance doit être supérieure à 2km",
    "number.integer": "La distance doit avoir un compte rond, sans virgule",
  }),
  difficulty: Joi.required().valid("easy", "medium", "hard").messages({
    "any.required": "La difficulté doit être renseignée",
    "string.valid": "La difficulté peut-être facile, moyenne ou difficile",
  }),
}).options({ abortEarly: false, allowUnknown: true });

export { hikeValidationSchema };
