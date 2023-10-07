import { Router } from "express";

import { BookCasesRepository } from "../modules/books/repositories/implementations/BookCasesRepository";
import { bookCaseController } from "../modules/books/useCases/createBookCase";

const bookCasesRouter = Router();

const bookCasesRepository = new BookCasesRepository();

bookCasesRouter.post("/", (request, response) => {
  bookCaseController.handle(request, response);
});

bookCasesRouter.get("/", (request, response) => {
  const all = bookCasesRepository.list();

  return response.json(all);
});

export { bookCasesRouter };
