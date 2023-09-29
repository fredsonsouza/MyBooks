import { BookCasesRepository } from "../repositories/BookCasesRepository";

interface IRequest {
  numeration: number;
  stand: number;
}

class CreateBookCaseService {
  constructor(private bookCasesRepository: BookCasesRepository) {}

  execute({ numeration, stand }: IRequest): void {
    const bookCaseAlreadyExists =
      this.bookCasesRepository.findByNumeration(numeration);

    if (bookCaseAlreadyExists) {
      throw new Error("BookCase Already Exists!");
    }
    this.bookCasesRepository.create({ numeration, stand });
  }
}
export { CreateBookCaseService };
