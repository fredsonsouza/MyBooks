import {  Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("books")
class Book {

  @PrimaryColumn()
  id?: string;

  @Column()
  title: string;

  @Column()
  year: string;

  @Column()
  edition: string;
  
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Book };
