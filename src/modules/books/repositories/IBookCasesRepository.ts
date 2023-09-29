import { BookCase } from "../modules/books/model/BookCase";

interface ICreateBookCaseDTO {
  numeration: number;
  stand: number;
}

interface IBookCasesRepository {
  create({ numeration, stand }: ICreateBookCaseDTO): void;
  list(): BookCase[];
  findByNumeration(numeration: number): BookCase;
}

export { IBookCasesRepository, ICreateBookCaseDTO };
