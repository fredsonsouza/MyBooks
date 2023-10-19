import { BookCase } from "../entities/BookCase";

interface ICreateBookCaseDTO {
  numeration: number;
  stand: number;
}

interface IBookCasesRepository {
  create({ numeration, stand }: ICreateBookCaseDTO): Promise<void>;
  list(): Promise<BookCase[]>;
  findByNumeration(numeration: number): Promise<BookCase>;
}

export { IBookCasesRepository, ICreateBookCaseDTO };
