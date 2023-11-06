import { DataSource } from "typeorm";
import { Book } from "../modules/books/entities/Book";
import { BookCase } from "../modules/books/entities/BookCase";
import { User } from "../modules/accounts/entities/User";

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
  entities: [Book, BookCase, User],
})

export function createConnection(host ="database_mybooks"): Promise<DataSource>{
  return dataSource.setOptions({host}).initialize()
}

export default dataSource

