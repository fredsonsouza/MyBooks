import { IBooksRepository } from "../../repositories/IBooksRepository";

interface IRequest {
  title: string;
  year: string;
  edition: string;
}

class CreateBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute({ title, year, edition }: IRequest): Promise<void> {
    const bookAlreadyExists = await this.booksRepository.findByTitle(title);

    if (bookAlreadyExists) {
      throw new Error("Book Already Exists!");
    }

    this.booksRepository.create({ title, year, edition });
  }
}

export { CreateBookUseCase };
