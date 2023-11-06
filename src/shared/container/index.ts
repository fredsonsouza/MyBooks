import { container } from "tsyringe";
import { IBooksRepository } from "../../modules/books/repositories/IBooksRepository";
import { BooksRepository } from "../../modules/books/repositories/implementations/BooksRepository";
import { IBookCasesRepository } from "../../modules/books/repositories/IBookCasesRepository";
import { BookCasesRepository } from "../../modules/books/repositories/implementations/BookCasesRepository";
import { IUserRepository } from "../../modules/accounts/repositories/IUserRepository";
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";


container.registerSingleton<IBooksRepository>(
  "BooksRepository",
  BooksRepository
)

container.registerSingleton<IBookCasesRepository>(
  "BookCasesRepository",
  BookCasesRepository
)

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
)
