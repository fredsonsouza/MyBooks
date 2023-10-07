import { BooksRepository } from "../../repositories/implementations/BooksRepository";
import { ListBooksController } from "./ListBooksController";
import { ListBooksUseCase } from "./ListBooksUseCase";

const booksRepository = BooksRepository.getInstance();
const listBooksUseCase = new ListBooksUseCase(booksRepository);
const listBooksController = new ListBooksController(listBooksUseCase);

export { listBooksController };
