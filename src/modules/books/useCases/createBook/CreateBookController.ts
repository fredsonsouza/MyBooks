import { Request, Response } from "express";

import { CreateBookUseCase } from "./CreateBookUseCase";

class CreateBookController {
  constructor(private createBookUseCase: CreateBookUseCase) {}

  handle(request: Request, response: Response): Response {
    const { title, year, edition } = request.body;

    this.createBookUseCase.execute({ title, year, edition });

    return response.status(201).send();
  }
}

export { CreateBookController };
