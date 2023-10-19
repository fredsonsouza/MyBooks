import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("bookCases")
class BookCase {

  @PrimaryColumn()
  id?: string;

  @Column()
  numeration: number;
  
  @Column()
  stand: number;
  
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { BookCase };
