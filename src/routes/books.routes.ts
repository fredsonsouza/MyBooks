import { Router } from "express";

import { BooksRepository } from "../modules/books/repositories/BooksRepository";
import { CreateBookService } from "../modules/books/services/CreateBookService";

const booksRoutes = Router();

const booksRepository = new BooksRepository();

booksRoutes.post("/", (request, response) => {
  const { title, year, edition } = request.body;

  const createBookService = new CreateBookService(booksRepository);

  createBookService.execute({ title, year, edition });

  return response.status(201).send();
});

booksRoutes.get("/", (request, response) => {
  const all = booksRepository.list();

  return response.json(all);
});

export { booksRoutes };
