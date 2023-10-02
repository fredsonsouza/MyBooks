import { BooksRepository } from "../../repositories/BooksRepository";
import { ListBooksController } from "./ListBooksController";
import { ListBooksUseCase } from "./ListBooksUseCase";

const booksRepository = new BooksRepository();
const listBooksUseCase = new ListBooksUseCase(booksRepository);
const listBooksController = new ListBooksController(listBooksUseCase);

export { listBooksController };
