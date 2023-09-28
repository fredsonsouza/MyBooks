import { Book } from "../model/Book";

interface ICreateBookDTO {
  title: string;
  year: string;
  edition: string;
}

class BooksRepository {
  private books: Book[];

  constructor() {
    this.books = [];
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
