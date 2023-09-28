import { BooksRepository } from "../repositories/BooksRepository";

interface IRequest {
  title: string;
  year: string;
  edition: string;
}

class CreateBookService {
  constructor(private booksRepository: BooksRepository) {}

  execute({ title, year, edition }: IRequest): void {
    const bookAlreadyExists = this.booksRepository.findByTitle(title);

    if (bookAlreadyExists) {
      throw new Error("Book Already Exists!");
    }

    this.booksRepository.create({ title, year, edition });
  }
}

export { CreateBookService };
