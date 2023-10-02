import { BooksRepository } from "../../repositories/BooksRepository";
import { CreateBookController } from "./CreateBookController";
import { CreateBookUseCase } from "./CreateBookUseCase";

const booksRepository = new BooksRepository();

const createBookUseCase = new CreateBookUseCase(booksRepository);

const createBookController = new CreateBookController(createBookUseCase);

export { createBookController };
