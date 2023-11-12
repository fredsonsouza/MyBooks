import { Repository } from "typeorm";
import { IBooksRepository, ICreateBookDTO } from "../IBooksRepository";
import dataSource from "../../../../database";
import { Book } from "../../entities/Book";

class BooksRepository implements IBooksRepository {
  private repository: Repository<Book>

  constructor() {
    this.repository = dataSource.getRepository(Book)
  }

  async create({ title, year, edition }: ICreateBookDTO):Promise<void>  {
   const book = this.repository.create({
      title,
      year,
      edition
    });
    await this.repository.save(book)
  }

  async list(): Promise<Book[]> {
    const books = await this.repository.find()

    return books
  }

  async findByTitle(title: string): Promise<Book> {
    const book = await this.repository.findOneBy({title})
    return book
  }
}

export { BooksRepository };
