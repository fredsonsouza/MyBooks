import { Router } from "express";

import { createBookController } from "../modules/books/useCases/createBook";
import { listBooksController } from "../modules/books/useCases/listBook";

const booksRoutes = Router();

booksRoutes.post("/", (request, response) => {
  return createBookController.handle(request, response);
});

booksRoutes.get("/", (request, response) => {
  return listBooksController.handle(request, response);
});

export { booksRoutes };
