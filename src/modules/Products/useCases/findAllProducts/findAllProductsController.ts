import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllProductService } from "./findAllProductsService";

class FindAllProductController {
  async handle(req: Request, res: Response): Promise<Response> {
    // limit e offset sao definidos pelo middleware de paginacao.
    const limit = res.locals.limit;
    const offset = res.locals.offset;
    const findAllProductService = container.resolve(FindAllProductService);
    const products = await findAllProductService.execute(limit, offset);
    return res.send(products);
  }
}

export default new FindAllProductController();
