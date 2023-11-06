import { Router } from "express";
import multer from "multer";

import { CreateBookController } from "../modules/books/useCases/createBook/CreateBookController";
import { listBooksController } from "../modules/books/useCases/listBook";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const booksRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createBookController = new CreateBookController()

booksRoutes.use(ensureAuthenticated)
booksRoutes.post("/",createBookController.handle) 

booksRoutes.get("/", (request, response) => {
  return listBooksController.handle(request, response);
});

export { booksRoutes };
