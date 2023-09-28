import { Router } from "express";

import { Book } from "../model/Book";

const booksRoutes = Router();

const books: Book[] = [];

booksRoutes.post("/", (request, response) => {
  const { title, year, edition } = request.body;

  const book = new Book();
  Object.assign(book, {
    title,
    year,
    edition,
    created_at: new Date(),
  });

  books.push(book);

  return response.status(201).json({ book });
});

export { booksRoutes };
