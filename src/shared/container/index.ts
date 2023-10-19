import { container } from "tsyringe";
import { IBooksRepository } from "../../modules/books/repositories/IBooksRepository";
import { BooksRepository } from "../../modules/books/repositories/implementations/BooksRepository";
import { IBookCasesRepository } from "../../modules/books/repositories/IBookCasesRepository";
import { BookCasesRepository } from "../../modules/books/repositories/implementations/BookCasesRepository";


container.registerSingleton<IBooksRepository>(
  "BooksRepository",
  BooksRepository
)

container.registerSingleton<IBookCasesRepository>(
  "BookCasesRepository",
  BookCasesRepository
)
