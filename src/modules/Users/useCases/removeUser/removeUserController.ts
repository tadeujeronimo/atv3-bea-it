import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { RemoveUserService } from "./removeUserService";

class RemoveUserController {
  async handle(
    req: Request,
    res: Response
  ): Promise<Response | NextFunction | undefined> {
    const { id } = req.params;
    // Recebe o id da URL e delega a remocao ao service.
    const updateUserService = container.resolve(RemoveUserService);
    await updateUserService.execute(id);
    return res.sendStatus(204);
  }
}

export default new RemoveUserController();
