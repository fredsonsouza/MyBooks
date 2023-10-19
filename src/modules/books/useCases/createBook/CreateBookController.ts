import { Request, Response } from "express";

import { CreateBookUseCase } from "./CreateBookUseCase";
import { container } from "tsyringe";

class CreateBookController {

  async handle(request: Request, response: Response):Promise< Response> {
    const { title, year, edition } = request.body;
    
    const createBookUseCase = container.resolve(CreateBookUseCase)

    await createBookUseCase.execute({ title, year, edition });

    return response.status(201).send();
  }
}

export { CreateBookController };
