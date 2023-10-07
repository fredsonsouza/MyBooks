import { Router } from "express";
import multer from "multer";

import { createBookController } from "../modules/books/useCases/createBook";
import { listBooksController } from "../modules/books/useCases/listBook";

const booksRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

booksRoutes.post("/", (request, response) => {
  return createBookController.handle(request, response);
});

booksRoutes.get("/", (request, response) => {
  return listBooksController.handle(request, response);
});

booksRoutes.post("/import", upload.single("file"), (request, response) => {
  const { file } = request;
  console.log(file);
  return response.send();
});

export { booksRoutes };
