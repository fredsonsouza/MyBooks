import express from "express";

import { booksRoutes } from "./routes/books.routes";
import { bookCasesRouter } from "./routes/booksCases.routes";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hey, Let's go!" });
});

app.use(express.json());

app.use("/books", booksRoutes);
app.use("/bookCases", bookCasesRouter);

app.listen(3333, () => console.log("Server is running!"));
