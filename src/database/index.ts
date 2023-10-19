import { DataSource } from "typeorm";
import { Book } from "../modules/books/entities/Book";
import { BookCase } from "../modules/books/entities/BookCase";

const dataSource = new DataSource({
  type:"postgres",
  host:"localhost",
  port:5432,
  username:"docker",
  password:"ignite",
  database:"mybooks",
  migrations:[
    "./src/database/migrations/*.ts",
  ],
  entities: [Book, BookCase],
})

export function createConnection(host ="database_mybooks"): Promise<DataSource>{
  return dataSource.setOptions({host}).initialize()
}

export default dataSource

