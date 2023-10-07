import { BookCasesRepository } from "../../repositories/implementations/BookCasesRepository";
import { CreateBookCaseController } from "./CreateBookCaseController";
import { CreateBookCaseUseCase } from "./CreateBookCaseUseCase";

const bookCasesRepository = BookCasesRepository.getInstance();

const createBookCaseUseCase = new CreateBookCaseUseCase(bookCasesRepository);

const bookCaseController = new CreateBookCaseController(createBookCaseUseCase);

export { bookCaseController };
