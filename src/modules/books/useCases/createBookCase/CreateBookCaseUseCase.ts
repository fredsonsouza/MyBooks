import { BookCasesRepository } from "../../repositories/implementations/BookCasesRepository";

interface IRequest {
  numeration: number;
  stand: number;
}
class CreateBookCaseUseCase {
  constructor(private bookCasesRepository: BookCasesRepository) {}

  execute({ numeration, stand }: IRequest): void {
    const bookCaseAlreadyExists =
      this.bookCasesRepository.findByNumeration(numeration);

    if (bookCaseAlreadyExists) {
      throw new Error("BookCase Already Exists!");
    }

    return this.bookCasesRepository.create({ numeration, stand });
  }
}

export { CreateBookCaseUseCase };
