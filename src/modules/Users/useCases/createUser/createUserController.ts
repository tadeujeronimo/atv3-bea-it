import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "./createUserService";

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response | undefined> {
    // Recebe os dados do novo usuario e delega a regra de negocio ao service.
    const body = req.body;
    const createUserService = container.resolve(CreateUserService);
    await createUserService.execute(body);
    return res.sendStatus(201);
  }
}

export default new CreateUserController();
