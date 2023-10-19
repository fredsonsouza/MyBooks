import { Router } from "express";
import multer from "multer";

import { CreateBookController } from "../modules/books/useCases/createBook/CreateBookController";
import { listBooksController } from "../modules/books/useCases/listBook";

const booksRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createBookController = new CreateBookController()

booksRoutes.post("/",createBookController.handle) 

booksRoutes.get("/", (request, response) => {
  return listBooksController.handle(request, response);
});

booksRoutes.post("/import", upload.single("file"), (request, response) => {
  const { file } = request;
  console.log(file);
  return response.send();
});

export { booksRoutes };
