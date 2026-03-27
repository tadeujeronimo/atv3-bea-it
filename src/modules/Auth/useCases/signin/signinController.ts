import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe";
import { SigninService } from "./signinService";

class SigninController {
  async handle(
    req: Request,
    res: Response
  ): Promise<Response | NextFunction | undefined> {
    // Credenciais chegam no body e sao validadas no service.
    const body = req.body;
    const signinService = container.resolve(SigninService);
    const token = await signinService.execute(body);
    // Retorna o JWT para autenticacao nas rotas protegidas.
    return res.send({ token });
  }
}

export default new SigninController();
