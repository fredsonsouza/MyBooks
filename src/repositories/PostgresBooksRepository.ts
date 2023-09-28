/* eslint-disable @typescript-eslint/no-unused-vars */
import { Book } from "../model/Book";
import { IBooksRepository, ICreateBookDTO } from "./IBooksRepository";

class PostgresBooksRepository implements IBooksRepository {
  findByTitle(title: string): Book {
    return null;
  }
  list(): Book[] {
    return null;
  }
  create({ title, year, edition }: ICreateBookDTO): void {
    console.log(title, year, edition);
  }
}
export { PostgresBooksRepository };
