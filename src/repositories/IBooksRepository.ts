import { Book } from "../model/Book";

interface ICreateBookDTO {
  title: string;
  year: string;
  edition: string;
}

interface IBooksRepository {
  findByTitle(title: string): Book;
  list(): Book[];
  create({ title, year, edition }: ICreateBookDTO): void;
}

export { IBooksRepository, ICreateBookDTO };
