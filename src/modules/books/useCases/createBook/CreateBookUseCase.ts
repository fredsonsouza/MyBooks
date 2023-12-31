import { inject, injectable } from "tsyringe";
import { IBooksRepository } from "../../repositories/IBooksRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  title: string;
  year: string;
  edition: string;
}

@injectable()
class CreateBookUseCase {
  constructor(
    @inject("BooksRepository")
    private booksRepository: IBooksRepository) {}

  async execute({ title, year, edition }: IRequest): Promise<void> {
    const bookAlreadyExists = await this.booksRepository.findByTitle(title);

    if (bookAlreadyExists) {
      throw new AppError("Book Already Exists!");
    }

    await this.booksRepository.create({ title, year, edition });
  }
}

export { CreateBookUseCase };
