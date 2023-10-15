import { DataSource } from "typeorm";
import { Book } from "../modules/books/entities/Book";

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
  entities: [Book],
})

export function createConnection(host ="database_mybooks"): Promise<DataSource>{
  return dataSource.setOptions({host}).initialize()
}

export default dataSource

