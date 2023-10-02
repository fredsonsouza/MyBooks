import { Book } from "../../model/Book";
import { IBooksRepository } from "../../repositories/IBooksRepository";

class ListBooksUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  execute(): Book[] {
    const books = this.booksRepository.list();

    return books;
  }
}

export { ListBooksUseCase };
