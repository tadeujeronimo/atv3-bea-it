import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { RemoveFavoriteProductService } from "./removeFavoriteProductService";

class RemoveFavoriteProductController {
  async handle(
    req: Request,
    res: Response
  ): Promise<Response | NextFunction | undefined> {
    const { productId } = req.params;
    const { _id } = res.locals.user;

    // Remove da lista de favoritos apenas do usuario autenticado.
    const removeFavoriteProductService = container.resolve(
      RemoveFavoriteProductService
    );
    await removeFavoriteProductService.execute(_id, productId);
    return res.sendStatus(204);
  }
}

export default new RemoveFavoriteProductController();
