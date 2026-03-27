import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdProductService } from "./findByIdProductService";

class FindByIdProductController {
  async handle(req: Request, res: Response): Promise<Response | undefined> {
    const { id } = req.params;
    // O id vem da URL e e usado para buscar um unico produto.
    const findByIdProductService = container.resolve(FindByIdProductService);
    const user = await findByIdProductService.execute(id);
    return res.send(user);
  }
}

export default new FindByIdProductController();
