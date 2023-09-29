import { Router } from "express";

import { BookCasesRepository } from "../modules/books/repositories/BookCasesRepository";
import { CreateBookCaseService } from "../modules/books/services/CreateBookCaseService";

const bookCasesRouter = Router();

const bookCasesRepository = new BookCasesRepository();

bookCasesRouter.post("/", (request, response) => {
  const { numeration, stand } = request.body;

  const createBooCaseService = new CreateBookCaseService(bookCasesRepository);

  createBooCaseService.execute({ numeration, stand });

  return response.status(201).send();
});
bookCasesRouter.get("/", (request, response) => {
  const all = bookCasesRepository.list();

  return response.json(all);
});

export { bookCasesRouter };
