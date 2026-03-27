import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdOrderService } from "./findByIdOrderService";

class FindByIdOrderController {
  async handle(req: Request, res: Response): Promise<Response | undefined> {
    // O id da rota identifica qual pedido sera retornado.
    const { id } = req.params;
    const findByIdOrderService = container.resolve(FindByIdOrderService);
    const order = await findByIdOrderService.execute(id);
    return res.send(order);
  }
}

export default new FindByIdOrderController();
