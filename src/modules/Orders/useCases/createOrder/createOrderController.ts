import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateOrderService } from "./createOrderService";

class CreateOrderController {
  async handle(req: Request, res: Response): Promise<Response | undefined> {
    const { _id } = res.locals.user;
    // O pedido sempre e criado vinculado ao usuario autenticado.
    const body = req.body;
    const creatOrderService = container.resolve(CreateOrderService);
    await creatOrderService.execute(_id, body);
    return res.sendStatus(201);
  }
}

export default new CreateOrderController();
