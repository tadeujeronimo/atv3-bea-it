import { inject, injectable } from "tsyringe";
import { NotFoundError } from "helpers/errors/apiErrors";
import { ICartRepository } from "modules/Carts/repositories/ICartRepository";
import { Cart } from "modules/Carts/entities/Cart";

@injectable()
export class FindByIdCartService {
  constructor(
    @inject("CartRepository")
    private cartRepository: ICartRepository
  ) {}

  async execute(id: string): Promise<Cart> {
    // Busca direta por id para validar existencia antes de devolver o recurso.
    const cart = await this.cartRepository.findById(id);
    if (!cart) throw new NotFoundError("Cart not found!");
    return cart;
  }
}
