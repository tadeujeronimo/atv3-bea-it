import { Request, Response } from "express";
import { container } from "tsyringe";
import { RemoveOrderService } from "./removeOrderService";

class RemoveOrderController {
  async handle(req: Request, res: Response): Promise<Response | undefined> {
    const { id } = req.params;
    const removeOrderService = container.resolve(RemoveOrderService);
    await removeOrderService.execute(id);
    // Remocao bem-sucedida sem conteudo na resposta.
    return res.sendStatus(204);
  }
}

export default new RemoveOrderController();
