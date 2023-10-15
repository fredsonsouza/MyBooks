import { Request, Response } from "express";

import { CreateBookUseCase } from "./CreateBookUseCase";

class CreateBookController {
  constructor(private createBookUseCase: CreateBookUseCase) {}

  async handle(request: Request, response: Response):Promise< Response> {
    const { title, year, edition } = request.body;

   await this.createBookUseCase.execute({ title, year, edition });

    return response.status(201).send();
  }
}

export { CreateBookController };
