import { BookCase } from "../../entities/BookCase";
import {
  IBookCasesRepository,
  ICreateBookCaseDTO,
} from "../IBookCasesRepository";

class BookCasesRepository implements IBookCasesRepository {
  private bookCases: BookCase[];

  private static INSTANCE: BookCasesRepository;

  constructor() {
    this.bookCases = [];
  }

  public static getInstance(): BookCasesRepository {
    if (!BookCasesRepository.INSTANCE) {
      BookCasesRepository.INSTANCE = new BookCasesRepository();
    }
    return BookCasesRepository.INSTANCE;
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
