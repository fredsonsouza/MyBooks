import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type:"postgres",
  host:"localhost",
  port:5432,
  username:"docker",
  password:"ignite",
  database:"mybooks",
  migrations:[
    "./src/database/migrations/*.ts",
  ]
})

export function createConnection(host ="database_mybooks"): Promise<DataSource>{
  return dataSource.setOptions({host}).initialize()
}

export default dataSource

