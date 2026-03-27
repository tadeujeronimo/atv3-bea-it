import { NextFunction, Request, Response } from "express";
import { ApiError } from "helpers/errors/apiErrors";

class paginationMiddleware {
  handle(
    err: Error & Partial<ApiError>,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    console.log(err)
    try {
      let { limit, offset } = req.query;

      // Query params chegam como string; a conversao definitiva ocorre no fluxo de uso.
      limit ? Number(limit) : 10;
      offset ? Number(offset) : 0;

      // Usa res.locals para compartilhar paginacao com controllers/services.
      res.locals.limit = limit;
      res.locals.offset = offset;

      return next();
    } catch (err) {
      return next(err);
    }
  }
}

export default new paginationMiddleware();
