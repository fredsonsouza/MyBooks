import { Request, Response } from "express";

import { CreateBookCaseUseCase } from "./CreateBookCaseUseCase";

class CreateBookCaseController {
  constructor(private createBookCaseUseCase: CreateBookCaseUseCase) {}

  handle(request: Request, response: Response): Response {
    const { numeration, stand } = request.body;

    this.createBookCaseUseCase.execute({ numeration, stand });

    return response.status(201).send();
  }
}
export { CreateBookCaseController };
