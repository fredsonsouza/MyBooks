import { inject, injectable } from "tsyringe";
import { BookCasesRepository } from "../../repositories/implementations/BookCasesRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  numeration: number;
  stand: number;
}

@injectable()
class CreateBookCaseUseCase {
  constructor(
    @inject("BookCasesRepository")
    private bookCasesRepository: BookCasesRepository) {}

 async execute({ numeration, stand }: IRequest): Promise<void> {
    const bookCaseAlreadyExists = await this.bookCasesRepository.findByNumeration(numeration);

    if (bookCaseAlreadyExists) {
      throw new AppError("BookCase Already Exists!");
    }

    await this.bookCasesRepository.create({ numeration, stand });
  }
}

export { CreateBookCaseUseCase };
