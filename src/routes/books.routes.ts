import { Router } from "express";

import { BooksRepository } from "../repositories/BooksRepository";

const booksRoutes = Router();

const booksRepository = new BooksRepository();

booksRoutes.post("/", (request, response) => {
  const { title, year, edition } = request.body;

  booksRepository.create({ title, year, edition });
  return response.status(201).send();
});

export { booksRoutes };
