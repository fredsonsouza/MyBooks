import { Book } from "../../entities/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";

class ListBooksUseCase {
  constructor(private booksRepository: IBooksRepository) {}

   execute(): Book[] {
    const books = this.booksRepository.list();

    return books;
  }
}

export { ListBooksUseCase };
