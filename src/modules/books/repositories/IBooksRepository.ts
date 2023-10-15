import { Book } from "../entities/Book";

interface ICreateBookDTO {
  title: string;
  year: string;
  edition: string;
}

interface IBooksRepository {
  findByTitle(title: string): Promise<Book>;
  list(): Promise<Book[]>;
  create({ title, year, edition }: ICreateBookDTO): Promise<void>;
}

export { IBooksRepository, ICreateBookDTO };
