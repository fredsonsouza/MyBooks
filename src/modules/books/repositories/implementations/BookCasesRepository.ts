import { Repository } from "typeorm";
import { BookCase } from "../../entities/BookCase";
import {
  IBookCasesRepository,
  ICreateBookCaseDTO,
} from "../IBookCasesRepository";
import dataSource from "../../../../database";

class BookCasesRepository implements IBookCasesRepository {
  private repository: Repository<BookCase>


  constructor() {
    this.repository = dataSource.getRepository(BookCase)
  }


  async create({ numeration, stand }: ICreateBookCaseDTO): Promise<void> {
    const bookCase = new BookCase();
    Object.assign(bookCase, {
      numeration,
      stand,
      created_at: new Date(),
    });
    await this.repository.save(bookCase)
  }
 async list(): Promise<BookCase[]> {
    const bookCases = await this.repository.find()
    return bookCases;
  }
  async findByNumeration(numeration: number): Promise<BookCase> {
    const bookCase = await this.repository.findOneBy({numeration})

    return bookCase
     
  }
}
export { BookCasesRepository };
