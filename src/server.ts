import express from "express";
import swaggerUi from "swagger-ui-express";

import "./database"

import "./shared/container"

import { router } from "./routes";

import swaggerFile from "./swagger.json";

import  {createConnection}  from "./database";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

createConnection();

app.use(router);

app.listen(3333, () => console.log("Server is running!"));
