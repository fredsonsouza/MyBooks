import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type:"postgres",
  host:"database_mybooks",
  port:5432,
  username:"docker",
  password:"ignite",
  database:"mybooks"
})

dataSource.initialize()