import { Router } from "express";

import { BookCasesRepository } from "../modules/books/repositories/implementations/BookCasesRepository";
import { CreateBookCaseController } from "../modules/books/useCases/createBookCase/CreateBookCaseController";

const bookCasesRouter = Router();

const createBookCaseController = new CreateBookCaseController()

bookCasesRouter.post("/", createBookCaseController.handle);

// bookCasesRouter.get("/", (request, response) => {
//   const all = bookCasesRepository.list();

//   return response.json(all);
// });

export { bookCasesRouter };
