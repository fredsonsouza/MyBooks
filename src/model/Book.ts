import { v4 as uuidv4 } from "uuid";

class Book {
  id?: string;
  title: string;
  year: string;
  edition: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Book };
