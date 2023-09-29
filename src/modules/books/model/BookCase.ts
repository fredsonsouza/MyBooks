import { v4 as uuidv4 } from "uuid";

class BookCase {
  id?: string;
  numeration: number;
  stand: number;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { BookCase };
