import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdCategoryService } from "./findByIdCategoryService";

class FindByIdCategoryController {
  async handle(
    req: Request,
    res: Response
  ): Promise<Response | NextFunction | undefined> {
    const { id } = req.params;
    // Recupera uma categoria especifica a partir do id da URL.
    const findByIdCategoryService = container.resolve(FindByIdCategoryService);
    const user = await findByIdCategoryService.execute(id);
    return res.send(user);
  }
}

export default new FindByIdCategoryController();
