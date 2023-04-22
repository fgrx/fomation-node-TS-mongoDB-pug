import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const validateSchema =
  (schema: Joi.Schema) => (req: Request, res: Response, next: NextFunction) => {
    const form = req.body;

    const { error } = schema.validate(form);

    if (error) {
      const errors = error?.details.map((element) => element.message);
      res.status(422).send(errors);
    } else {
      next();
    }
  };

export { validateSchema };
