import { Request, Response } from "express";

import { CreateBookCaseUseCase } from "./CreateBookCaseUseCase";
import { container } from "tsyringe";

class CreateBookCaseController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { numeration, stand } = request.body;

    const createBookCaseUseCase = container.resolve(CreateBookCaseUseCase)

    await createBookCaseUseCase.execute({ numeration, stand });

    return response.status(201).send();
  }
}
export { CreateBookCaseController };
