import { NextFunction, Request, Response } from "express";
import { ConflictError } from "helpers/errors/apiErrors";

class ValidateSchemma {
  handle(schema: any) {
    return (req: Request, res: Response, next: NextFunction) => {
      // abortEarly false retorna todos os erros de validacao de uma vez.
      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) {
        const errors = error.details.map((detail: any) => detail.message);
        throw new ConflictError(errors);
      }

      next();
    };
  }
}

export default new ValidateSchemma();
