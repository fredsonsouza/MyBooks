import { BookCase } from "../model/BookCase";
import {
  IBookCasesRepository,
  ICreateBookCaseDTO,
} from "./IBookCasesRepository";

class BookCasesRepository implements IBookCasesRepository {
  private bookCases: BookCase[];

  constructor() {
    this.bookCases = [];
  }
  create({ numeration, stand }: ICreateBookCaseDTO): void {
    const bookCase = new BookCase();
    Object.assign(bookCase, {
      numeration,
      stand,
      created_at: new Date(),
    });
    this.bookCases.push(bookCase);
  }
  list(): BookCase[] {
    return this.bookCases;
  }
  findByNumeration(numeration: number): BookCase {
    const bookCase = this.bookCases.find(
      (bookCase) => bookCase.numeration === numeration,
    );
    return bookCase;
  }
}
export { BookCasesRepository };
