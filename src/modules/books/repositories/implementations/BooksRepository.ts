import { Book } from "../../model/Book";
import { IBooksRepository, ICreateBookDTO } from "../IBooksRepository";

class BooksRepository implements IBooksRepository {
  private books: Book[];

  private static INSTANCE: BooksRepository;

  constructor() {
    this.books = [];
  }

  public static getInstance(): BooksRepository {
    if (!BooksRepository.INSTANCE) {
      BooksRepository.INSTANCE = new BooksRepository();
    }
    return BooksRepository.INSTANCE;
  }
  create({ title, year, edition }: ICreateBookDTO): void {
    const book = new Book();
    Object.assign(book, {
      title,
      year,
      edition,
      created_at: new Date(),
    });

    this.books.push(book);
  }

  list(): Book[] {
    return this.books;
  }

  findByTitle(title: string): Book {
    const book = this.books.find((book) => book.title === title);
    return book;
  }
}

export { BooksRepository };
