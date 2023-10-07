import { Router } from "express";

import { booksRoutes } from "./books.routes";
import { bookCasesRouter } from "./booksCases.routes";

const router = Router();

router.use("/books", booksRoutes);
router.use("/bookCases", bookCasesRouter);

export { router };
